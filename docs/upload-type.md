# Upload Type

**Difficulty**: :star2::star2::star2:

**Description**: Upload a file that has no .pdf or .zip extension.

**Category**: Improper Input Validation

**Tags**:

**Solution**:

Go to the `complaint` page via http://localhost:3000/#/complain
Try a valid and go to Burp Suite to see the POST /file-upload request

![image](https://user-images.githubusercontent.com/63692190/180630229-025abeaf-72ca-4d94-b448-a44294578999.png)

Send it to Repeater and replace the content of the valid PDF file with plain text and hit Send

![image](https://user-images.githubusercontent.com/63692190/180630411-7f38a6e4-0907-4ba2-aa74-a328554d9c08.png)

The challenge is solved

![image](https://user-images.githubusercontent.com/63692190/180630422-8bf68fe7-af9c-41e1-ac29-2d70d1dfc53a.png)
