# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Within the body of a method, it calls to super acts just like a call to that original method. The search for a method body starts in the superclass of the object that was found to contain the original method.

Researched answer:
You don't have to type super(from, to) – Ruby will assume that by default. But in the definition ( def initialize ) of the constructor you have to define both parameters, since Ruby doesn't – and shouldn't!

2. What is a gem?

Your answer: GEM (for Graphics Environment Manager) is an operating environment released by Digital Research (DRI) in 1985 for use with the DOS operating system on Intel 8088 and Motorola 68000 microprocessors.

Researched answer: They are simply open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code.

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are also called Relational Database Management Systems (RDBMS) or SQL databases. Historically, the most popular of these have been Microsoft SQL Server, Oracle Database, MySQL, and IBM DB2.

Researched answer: All relational databases can be used to manage transaction-oriented applications (OLTP), and most non-relational databases, in the categories of Document Stores and Column Stores, can also be used for OLTP, adding to the confusion between them. OLTP databases can be thought of as “operational” databases, characterized by frequent, short transactions that include updates, touch a small amount of data, and provide concurrency to thousands (if not more) of transactions (some examples include banking applications and online reservations).

4. What are primary keys? Why are they important?

Your answer: A primary key is the column or columns that contain values that uniquely identify each row in a table.A database table must have a primary key for Optim to insert, update, restore, or delete data from a database table

Researched answer: The main purpose of a primary key is to implement a relationship between two tables in a relational database; it's not called a relational database for nothing! More specifically, the primary key is the "target" which a foreign key can reference.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. CRUD stands for Create, Read, Update, and Delete. But put more simply, in regards to its use in RESTful APIs, CRUD is the standardized use of HTTP Action Verbs.

Researched answer: The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: it provides a mapping between the HTTP verbs like GET, PUT, POST, DELETE, etc. with CRUD(create, read, update, and delete) operations.

2. Model validations: Model validation refers to the process of confirming that the model actually achieves its intended purpose. In most situations

3. Params: params is a special keyword that allows passing a variable number of parameters into a method.

4. ERB: Embedded Ruby (also shortened as ERB) is a templating system that embeds Ruby into a text document.

5. API: API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function.
