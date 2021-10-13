const { NotImplementedError } = require('../extensions/index.js');

/*const { Node } = require('../extensions/list-tree.js');*/

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data = null) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}
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
          currentNode.left = newNode;
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

  has(data) {
    return searchWithIn(this.node, data); // возвращаем результат вызова ф-ции, которой говорим, где мы ищем - начинаем с корня дерева и что мы ищем - data
    function searchWithIn (current, data) { //текущий и проверяемый
   
    if (!current) { //если нет узлов
      return false;
    }

    if (current.data === data) { //значения совпали => true
      return true;
    }
    return data < current.data ?
    searchWithIn(current.left, data) :
    searchWithIn(current.right, data);

  }
  }
/*------------------------*/
  find(data) {
		return findWithIn(this.node, data); // возвращаем результат вызова ф-ции, которой говорим, где мы ищем - начинаем с корня дерева и что мы ищем - data
		function findWithIn (current, data) { //текущий и проверяемый
	   
		if (!current) { //если нет узлов
		  return null;
		}
	
		if (current.data === data) { //значения совпали => true
		  return current;
		}
		return data < current.data ?
		findWithIn(current.left, data) :
		findWithIn(current.right, data);
	
	  }
}
/*---------------------*/

  remove(data) {
    this.node = removeNode(this.node, data); // положить в корень результат выполнения ф-ции => где удалить и с каким значением   ***
		function removeNode(current, data) {
		if (!current) {  //если там нал - нет узла, то этот нал и оставляем
				return null; //точка остановки рекурсии
			}
			//определяем вкаку сторону пойти
		if(data < current.data) {//искомое меньше знач в тек узле => идем к леврму узлу
			current.left = removeNode(current.left, data ); // удаляем левый узел и то, что получится положить без удал эл-та
			return current; // возвращаем текущий узул, чтобы мы положиди его в наш корень node (наверх)***
		}

		if (data > current.data) {//искомое > знач в тек узле => идем к right узлу
			current.right = removeNode(current.right, data ); // удаляем right узел и то, что получится положить без удал эл-та    
			return current;    /* ***  и верни обновленное поддерево в корень*/
			}

			//поверелили, что узел сущ, не >, не <       ===> равен искомому
		else {
			if(!current.left && !current.right) {       //проверим явл ли он листом и его удалим
				return null;

			}  
			if (!current.left) {       //если нет лев потомка 
				current = current.right;  //вместо нас помещаем правого потомка
				return current;        //возвращаем обновленное поддерево в корень
			}              
			if (!current.right) {       //если нет right потомка 
				current = current.left;  //вместо нас помещаем left потомка
				return current;        //возвращаем обновленное поддерево в корень
			}              
			// у искомого (найденного) есть оба поддерева
			let minFromRight = current.right; //ищеи мин среди правого
			while(minFromRight.left) { //пока элемент слева есть мы перемещаемся к нему
				minFromRight = minFromRight.left;
			
			}
			current.data= minFromRight.data; // как только нашли мин эл в правом поддереве помещаем это знач в знач удаляемго узла
			current.right = removeNode(current.right, minFromRight.data);
			return current;


		}
	}
}

min() {
  if (!this.node){
    return;
  }

  let current = this.node; //вводим переменную для поиска мин
  while(current.left) { //пока слева кто-то есть
    current = current.left; // перемещаемся влево

  }
  return current.data;  //как только ксе закончились, возвращаем посл эл

   
}

max() {
  if (!this.node){
    return;
  }
  let current = this.node; //вводим переменную для поиска мин
  while(current.right) { //пока справа кто-то есть
    current = current.right;

  }
  return current.data;

 
}

}