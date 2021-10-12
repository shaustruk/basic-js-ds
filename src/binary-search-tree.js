const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  node = null; //объявление корня, тк root занято
  root() {
return this.node;  

}
  add(data) {
    const newNode = new Node(data); //создаем константу с новым деревом ,если при добавлении дерева еше нет

    if(!this.node) {            //если корня еще нет, то корнем и будт новый добавленный элемнт data
      this.node = newNode;      
      return;
    }
     //ищеи место, куда надо вставить листочек, больше-меньше
     let currentNode = this.node;  //текущий элемент - позиция, который будет ходить// начальный элемент корень - root (у нас node)
     while (currentNode) {  //пока в дереве есть элементы идем=>
      if (newNode.data < currentNode.data) {   //если добавляемое < текущего( сначала это корень)
        if(!currentNode.left) { //если слева от тек ничего нет,  то добавляем туда
          currentNode.letf = newNode;
            return; 
          }
          currentNode = currentNode.left;
        }
        else {                  //если добавляемое больше, то=>
          if(!currentNode.right) {  //если справа от корня ничего нет - добавляем туда
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }   
      }
   
  }

  has(/* data */) {
   
  }

  find(/* data */) {
  
  }

  remove(/* data */) {
   
  }

  min() {
    
  }

  max() {
   
  }

}