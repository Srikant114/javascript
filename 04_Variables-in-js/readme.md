### Variables in JavaScript

- Variable is a container which is used to store some information

#### How To Create a Variable

In general Variable can be created in three types Let, Var & const

- Let keyword cannot be redeclared and must be declared before use. Let keyword does not support hoisting
- Const keyboard cannot be redeclared and cannot be reassigned. Cannot be hoisted. It has to be assigned on the declared line itself
- Where keyword can be reassigned and redeclared. Its a global scope. It can be accessed outside the block also, and its a function scope

##### user_name:
- this is Snake Case

##### userName:
- this is Camel case

#### Difference between let & var
- Let is a blog scope if created inside a block. Cannot be accessed outside of the block. But where can be accessed outside of the block
- Var can be used before declaration. It will show undefined, but let cannot be used before declaration

#### Rules foe Naming Variables

- Variable names must start with a letter, an underscore (_) or a dollar sign ($).
- Variable names cannot contain spaces.
- Variables cannot be the same as reserved keywords such as if or const.
- By convention, JavaScript variable names are written in camelCase.
- Variables should be given descriptive names that indicate their content and usage (e.g. sellingPrice and costPrice rather than x and y).
- As JavaScript variables do not have set types, it can be useful to include an indication of the type in the name (e.g. orderNumber is     obviously a numeric ID, whereas order could be an object, a string or anything else).