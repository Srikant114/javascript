### Dialog Boxes

There are three types of dialog boxes supported in JavaScript that are **alert**, **confirm**, and **prompt**. These dialog boxes can be used to perform specific tasks such as raise an alert, to get confirmation of an event or an input, and to get input from the user.

#### Alert Dialog box

t is used to provide a warning message to users. It is one of the most widely used dialog box in JavaScript. It has only one **'OK'** button to continue and select the next task.

We can understand it by an example like suppose a textfield is mandatory to be filled out, but the user has not given any input value to that text field, then we can display a warning message by using the **alert box**.

#### Confirmation Dialog box

It is widely used for taking the opinion from the user on the specific option. It includes two buttons, which are **OK** and **Cancel**. As an example, suppose a user is required to delete some data, then the page can confirm it by using the confirmation box that whether he/she wants to delete it or not.

If a user clicks on the **OK** button, then the method **confirm()** returns **true**. But if the user clicks on the **cancel** button, then the **confirm()** method returns **false**.

#### Prompt Dialog box

The prompt dialog box is used when it is required to pop-up a text box for getting the user input. Thus, it enables interaction with the user.

The prompt dialog box also has two buttons, which are **OK** and **Cancel**. The user needs to provide input in the textbox and then click OK. When a user clicks on the OK button, then the dialog box reads that value and returns it to the user. But on clicking the **Cancel** button, **prompt()** method returns null.