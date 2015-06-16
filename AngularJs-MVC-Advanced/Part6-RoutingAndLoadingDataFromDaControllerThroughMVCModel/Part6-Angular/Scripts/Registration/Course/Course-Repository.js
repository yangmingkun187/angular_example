﻿//this is like a service
registrationModule.factory('CourseRepository', function ($http, $q) {
    return {
        get: function () {
            //creating a deferred object
            var deferred = $q.defer();

            //requesting for the Json and when it succeed this will call deferred.resolve if not it will call deferred.reject
            $http.get('/Course').success(deferred.resolve).error(deferred.reject);//(MVC controller inside $http.get()  )

            //return the promise(message) 
            return deferred.promise;
            }
        };
});
