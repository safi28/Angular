class Box<T> {
    items: T[] = [];
  
    public add(el: T | T[]) {
      this.items = this.items.concat(el);
    }
  
    public remove() {
     
    }
  
    get count(): number {
      return this.items.length;
    }
  }
  
  let box = new Box<Number>();
  box.add(1);
  box.add(2);
  box.add(3);
  console.log(box.count);
  
  //let box = new Box<String>();
  console.log(box);
  
  export default Box;