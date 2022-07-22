# Upload Size

**Difficulty**: :star2::star2::star2:

**Description**: Upload a file larger than 100 kB.

**Category**: Improper Input Validation

**Tags**:

**Solution**:

Go to the `complaint` page via `/#/complain`
![image](https://user-images.githubusercontent.com/70436051/180413484-3f306cbb-3eb3-4d09-b822-e4e553963887.png)

Try posting a file smaller than 100kb and go to Burp Suite to see the POST /file-upload request
![image](https://user-images.githubusercontent.com/70436051/180414902-15a81666-b1b0-4d99-8427-c92179374cde.png)

Send it to Repeater and replace the content of the sent file with the content of the file you want to send (copy the content of the file you want to send by opening the pdf file through notepad)
![image](https://user-images.githubusercontent.com/70436051/180417858-b4362fba-5bae-4fa9-ac22-45d8051f17a3.png)

Click `Send` and we got this challenge
![image](https://user-images.githubusercontent.com/70436051/180418106-48ac96e7-b66c-4238-813d-8e9cedccef9b.png)
