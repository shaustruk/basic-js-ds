const { NotImplementedError } = require('../extensions/index.js');

/*const { ListNode } = require('../extensions/list-node.js');*/

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
	constructor(value) {
	  this.value = value;
	  this.next = null;
	}
  }
module.exports = class Queue {
	constructor() {
		this.head = null;
		this.length = 0;
	}

  getUnderlyingList() {
	  return this.head;
   
  }

  enqueue(value) {
	  let newNode = new Node(value); //вводим перемунную для новго узла
	  let current = this.head;  //вводим переменную для прохода с головы
		if (!current) { //если список пустой
			this.head = newNode;  //втсавялем узел на место головы
			this.length++;
			return newNode;
		  } 
		     //список не пустой
			while(current.next) {   //пока есть следующий элемент
			  current = current.next; //переходим с тек переносим на след
			}
	  		current.next = newNode; //когда закончились следующие и впереди пусто => добавляем новый узел в конец списка
		  
	  
		  this.length++;
		  return newNode;
		 
		}
	  
	dequeue() {
		let current = this.head;
        let val = current.value;

		if (!current)  {
			return null;
		}
		else {
		this.head = current.next;
		this.length--;
		 return val;
     }
	}

}
