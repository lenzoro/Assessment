import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
// Template.profiles.helpers({//template helpers put data into the template
// 	profAll(){
// 		return userDB.find({});
// 	}
// });

Template.addbook.events({
  'click .js-save'(event, instance) {
		var name = $('#myModal input[name="name"]').val()
		var title = $('#myModal input[name="title"]').val()
		var description = $('#myModal input[name="description"]').val()
		var img = $('#myModal input[name="image"]').val()
		if(img ==""){
			img="https://cdn2.vectorstock.com/i/1000x1000/57/36/book-icon-isolated-on-round-background-vector-15985736.jpg"
		}
		console.log("The name is",name,title);
		$('#myModal input[name="name"]').val('')
		$('#myModal input[name="title"]').val('')
		$('#myModal input[name="image"]').val('')
		$('#myModal').modal('hide');
		userDB.insert({'name':name,'title':title, 'image':img});
  		
  },
});
