class foodsgrp{
    constructor(x, y, width, height){
        var options = {
            'restitution ' : 0.2,
            'friction': 1.5,
            'density': 1.5,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;

        World.add(World,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill('red');
        stroke('red');
        rect(0,0,this.width,this.height);
        pop();

    }
  };
