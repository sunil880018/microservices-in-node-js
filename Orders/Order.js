// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// It manages relationships between data, provides schema validation, 
// and is used to translate between objects in code and the representation of those 
// objects in MongoDB.


// 1.Collections
// ‘Collections’ in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

// 2.Documents
// ‘Documents’ are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.


// 3.Fields
// ‘Fields’ or attributes are similar to columns in a SQL table.

// 5.Schema
// While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

// 6.Models
// ‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.


// 7.npm install mongoose validator -->install mongoose and validator	



const mongoose = require('mongoose');


// Order Model

mongoose.model("Order", { // Order is Table name
	name: {
		type: String,
		required: true
	},
	customerId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true
	},
	qty: {
		type: Number,
		required: false
	}

})