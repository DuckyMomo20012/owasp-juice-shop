# Missing Encoding

**Difficulty**: :star2:

**Description**: Retrieve the photo of Bjoern's cat in "melee combat-mode".

**Category**: Improper Input Validation

**Tags**: `Shenanigans`

**Solution**:

Go to `Photo Wall` page you will see an error photo displayed
![image](https://user-images.githubusercontent.com/70436051/180348507-78c8a381-9eec-47e7-a9cc-d4e11cbd67cc.png)

Go to the src path of the image in the HTML code, we see the `#`
![image](https://user-images.githubusercontent.com/70436051/180349136-097706fe-4553-4c09-9b68-5270d9d5d402.png)


The file path uses `#` which will be interpreted as HTML anchors. So we fix it to `%23`,  which when encoded it becomes `#`
![image](https://user-images.githubusercontent.com/70436051/180349372-feb69aa9-3634-4142-a18d-42449172a069.png)

Bravo! We got it.