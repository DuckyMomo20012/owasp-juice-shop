# Zero Stars

**Difficulty**: :star2:

**Description**: Give a devastating zero-star feedback to the store.

**Category**: Improper Input Validation

**Tags**:

**Solution**:

Remove `mat-button-disabled` and `disabled="true"` from the `button` element. Then press `Submit` button to submit Zero Star feedback. 

E.g:
<code class="language-html">&lt;button _ngcontent-wpr-c122=&quot;&quot; type=&quot;submit&quot; id=&quot;submitButton&quot; mat-raised-button=&quot;&quot; color=&quot;primary&quot; aria-label=&quot;Button to send the review&quot; class=&quot;mat-focus-indicator mat-raised-button mat-button-base mat-primary <b><s>mat-button-disabled</s></b>&quot; <b><s>disabled=&quot;true&quot;</s></b>&gt;&lt;span class=&quot;mat-button-wrapper&quot;&gt;&lt;i _ngcontent-wpr-c122=&quot;&quot; class=&quot;material-icons&quot;&gt; send &lt;/i&gt; Submit &lt;/span&gt;&lt;span matripple=&quot;&quot; class=&quot;mat-ripple mat-button-ripple&quot;&gt;&lt;/span&gt;&lt;span class=&quot;mat-button-focus-overlay&quot;&gt;&lt;/span&gt;&lt;/button&gt;</code>


![zero star attack](https://user-images.githubusercontent.com/64480713/179662522-4b56b325-cf2b-43cc-a852-c8aace260b06.png)

Result:
You can see `(null)` feedback:

![result](https://user-images.githubusercontent.com/64480713/179662578-30050c6e-42a7-43e3-91a7-9102b6ce1417.png)

