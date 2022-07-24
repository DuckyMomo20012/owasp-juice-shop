# Deprecated Interface

**Difficulty**: :star2::star2:

**Description**: Use a deprecated B2B interface that was not properly shut down.

**Category**: Security Misconfiguration

**Tags**: `Contraption`, `Prerequisite`

**Solution**:

<!-- Please include screenshots for each step. Remember that the screenshot includes a clock to indicate the time solved. -->

When searching for term `deprecated`, `B2B`, `shut down` in file `main.js`, I found this

![image](https://user-images.githubusercontent.com/63692190/180627686-97e22b5e-c6e7-4e85-83dc-e0131dd0ee59.png)

B2B customer is allowed to upload XML order file, so head to http://localhost:3000/#/complain and try to upload a random XML file
The Choose File is to default accepting (filtering) "Custom Files" which seems to be PDF, ZIP file

![image](https://user-images.githubusercontent.com/63692190/180627813-1a7dfe7e-360d-41a5-b5a5-f8c8691aed45.png)

I changed filter to All Files and force upload an XML file

![image](https://user-images.githubusercontent.com/63692190/180627837-717aad8f-3c63-4542-8ac7-f5ae5c944689.png)

Result:

![image](https://user-images.githubusercontent.com/63692190/180627850-220beaa2-b3cd-407e-a8c0-bf47fb34ac39.png)


