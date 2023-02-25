class Path{
  constructor(search){
    // the search algorithm
    this.search = search;
    // an array with the record of tiles
    this.route = [];
  }
  
  // traverses from the last position of the route to the starting position and uses draws the path
  draw(cellWidth, cellHeight){
    this.route = [];
    let temp = this.search.currentTile;
    this.route.push(temp);
    while(temp.previous){
      this.route.push(temp.previous);
      temp = temp.previous;
    }
    this.route.reverse();
    noFill();
    stroke("gold");
    strokeWeight(5);
    beginShape();
    for (let i = 0; i < this.route.length; i++) {
      vertex(this.route[i].i * cellWidth + cellWidth / 2,
       this.route[i].j * cellHeight + cellHeight / 2);
    }
    endShape();
  }
}