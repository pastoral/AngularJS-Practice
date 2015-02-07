var myApp = angular.module("myApp", []);
myApp.service("ContactService" , function(){
	var uid = 1;
	var contacts = [{id : 0,
					 'name' : 'Tom',
					 'email' : 'tom@gmail.com',
					 'phone' : '911-91-199-999'}];
	
	
	// Save Service for sving new contact and saving existing edited contact.
	this.save = function(contact)  
	{
		if(contact.id == null)                       
		{
			contact.id = uid++;
			contacts.push(contact);
		}
		else
		{
			for(i in contacts)
			{
				if(contacts[i].id == contact.id)
				{
					contacts[i] = contact;
				}
			}
		}
	}
	
	// serach for a contact
	
	this.get = function(id)
	{
		for(i in contacts )
		{
			if( contacts[i].id == id)
			{
				return contacts[i];
			}
		}
	}
	
	//Delete a contact
	this.delete = function(id)
	{
		for(i in contacts)
			{
				if(contacts[i].id == id)
				{
					contacts.splice(i,1);
				}
			}
	}
	
	//Show all contacts
	this.list = function()
	{
		return contacts;
	}		
});


////Controller area .....
	
myApp.controller("ContactController" , function($scope , ContactService){

		$scope.contacts = ContactService.list();
		
		$scope.saveContact = function()
		{
			ContactService.save($scope.newcontact);
			$scope.newcontact = {};
		}
		
		
		$scope.delete = function(id)
		{
			ContactService.delete(id);
			if($scope.newcontact.id == id)
				{
					$scope.newcontact = {};
				}
		}
		
		$scope.edit = function(id)
		{
			$scope.newcontact = angular.copy(ContactService.get(id));
		}

});
	
