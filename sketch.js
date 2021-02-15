const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
var enemy1;

function setup() {
  
  createCanvas(400,400);
 enemy1 = new enemygrp(200,200,50,50)
 foodsgrp1 = new foodsgrp(200,250,100,20);
  

}

function draw() {
  background('black');
  drawSprites();
  foodsgrp1.display();  
 
  enemy1.display();
 
 
}