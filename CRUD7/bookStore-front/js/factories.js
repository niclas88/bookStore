var standardMethods = {
    'create': { method: 'POST' },
    'index': { method: 'GET', isArray: true },
    'show': { method: 'GET', isArray: false },
    'update': { method: 'PUT' },
    'destroy': { method: 'DELETE' }
};

app.factory("book",["$resource", function ($resource) {
    return $resource("/api/book/:id", { id: "@id" }, standardMethods);
}]);

app.factory("author", ["$resource", function ($resource) {
    return $resource("/api/author/:id", { id: "@id" }, standardMethods);
}]);

app.factory("genre", ["$resource", function ($resource) {
    return $resource("/api/genre/:id", { id: "@id" }, standardMethods);
}]);

app.factory("image", ["$resource", function ($resource) {
    return $resource("/api/image/:id", { id: "@id" }, standardMethods);
}]);

app.factory("rating", ["$resource", function ($resource) {
    return $resource("/api/rating/:id", { id: "@id" }, standardMethods);
}]);