import React, { useRef, useEffect } from "react";
import p5 from "p5";
import { Card } from "react-bootstrap";

const CubeSketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let angle = 0;
      let points = [];

      p.setup = () => {
        p.createCanvas(300, 300).parent(sketchRef.current);

        points[0] = p.createVector(-0.5, -0.5, -0.5);
        points[1] = p.createVector(0.5, -0.5, -0.5);
        points[2] = p.createVector(0.5, 0.5, -0.5);
        points[3] = p.createVector(-0.5, 0.5, -0.5);
        points[4] = p.createVector(-0.5, -0.5, 0.5);
        points[5] = p.createVector(0.5, -0.5, 0.5);
        points[6] = p.createVector(0.5, 0.5, 0.5);
        points[7] = p.createVector(-0.5, 0.5, 0.5);
      };

      function matmul(a, vec) {
        let result = p.createVector(
          a[0][0] * vec.x + a[0][1] * vec.y + a[0][2] * vec.z,
          a[1][0] * vec.x + a[1][1] * vec.y + a[1][2] * vec.z,
          a[2][0] * vec.x + a[2][1] * vec.y + a[2][2] * vec.z
        );
        return result;
      }

      p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);

        const rotationZ = [
          [p.cos(angle), -p.sin(angle), 0],
          [p.sin(angle), p.cos(angle), 0],
          [0, 0, 1],
        ];

        const rotationX = [
          [1, 0, 0],
          [0, p.cos(angle), -p.sin(angle)],
          [0, p.sin(angle), p.cos(angle)],
        ];

        const rotationY = [
          [p.cos(angle), 0, p.sin(angle)],
          [0, 1, 0],
          [-p.sin(angle), 0, p.cos(angle)],
        ];

        let projected = [];

        for (let i = 0; i < points.length; i++) {
          let rotated = matmul(rotationY, points[i]);
          rotated = matmul(rotationX, rotated);
          rotated = matmul(rotationZ, rotated);
          let distance = 2;
          let z = 1 / (distance - rotated.z);
          const projection = [
            [z, 0, 0],
            [0, z, 0],
          ];
          let projected2d = p.createVector(
            projection[0][0] * rotated.x + projection[0][1] * rotated.y,
            projection[1][0] * rotated.x + projection[1][1] * rotated.y
          );

          projected2d.mult(200);
          projected[i] = projected2d;
        }

        for (let i = 0; i < projected.length; i++) {
          p.stroke(255);
          p.strokeWeight(8);
          p.point(projected[i].x, projected[i].y);
        }

        for (let i = 0; i < 4; i++) {
          connect(i, (i + 1) % 4, projected);
          connect(i + 4, ((i + 1) % 4) + 4, projected);
          connect(i, i + 4, projected);
        }

        angle += 0.03;
      };

      function connect(i, j, points) {
        const a = points[i];
        const b = points[j];
        p.strokeWeight(2);
        p.stroke(255);
        p.line(a.x, a.y, b.x, b.y);
      }
    };

    let p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

const CubeCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{props.title}</Card.Title>
        {"\n"}
        <CubeSketch />
        {"\n"}
        <Card.Text style={{ textAlign: "justify" }}>
                  {props.description}
                </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CubeCard;
