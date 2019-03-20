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
Template.mainBody.helpers({
	allID(){
		return userDB.find({})
	}
})

Template.addbook.events({
  'click .js-save'(event, instance) {
		var name = $('#myModal input[name="name"]').val();
		var title = $('#myModal input[name="title"]').val();
		var description = $('#myModal input[name="Description"]').val();
		var img = $('#myModal input[name="image"]').val();
		if(img ==undefined || img == ""){
			img="book.png";
		}
		console.log("The name is",name,title);
		$('#myModal input[name="name"]').val('');
		$('#myModal input[name="title"]').val('');
		$('#myModal input[name="image"]').val('');
		$('#myModal input[name="Description"]').val('');
		$('#myModal').modal('hide');
		userDB.insert({'name':name,'title':title, 'image':img,'des':description});

  		
  },
  
});
Template.mainBody.events({
  'click .edit-js'(event, instance){
  	console.log("edit clicked");
  	$('#modaledit').modal('show');

  },
  'click .js-tdown'(event, instance){
  	var likes = userDB.findone({})
  }
});
