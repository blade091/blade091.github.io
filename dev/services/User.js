angular.module('addressBook')
	.factory('User', function () {

		'use strict';

		var STORAGE_ID;

		var defaultUser = {
			isLoggedIn: false,
			login: '',
			password: '',
			activeGroup : '!',
			reverse : false,
			sortFlag : 0,
			sortType : 'asc',
			contacts: [],
			groups: []
		};

		return {
			get : function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID));
			},
			set : function (data) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(data));
			},
			getDefault : function () {
				return defaultUser;
			},
			setLastAccess : function (lA) {
				return localStorage.setItem('lastAccessedUser', lA);
			},
			getLastAccess : function () {
				return localStorage.getItem('lastAccessedUser');
			},
			clearLastAccess : function () {
				return localStorage.removeItem('lastAccessedUser');
			},
			setStorage : function (id) {
				STORAGE_ID = id;
			}
		}

});