self.addEventListener('fetch', (event) => {
  // هذه الاستراتيجية البسيطة تضمن أن التطبيق يعمل دائمًا أونلاين
  // وهي ضرورية لتجنب مشاكل التخزين المؤقت مع Apps Script
  event.respondWith(fetch(event.request));
});
```    *   اضغط "Commit new file".
