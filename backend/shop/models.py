from django.db import models
from PIL import Image
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)
    slug = models.CharField(max_length=30, unique=True, blank=True, null=True)
    image = models.ImageField(upload_to="category", blank=True, null=True)

    def __str__(self):
        return f"{self.name}"

    def save(self, *args, **kwargs):
        self.slug = self.name.replace(" ", "-").lower()
        super(Category, self).save(*args, **kwargs)

        if self.image:
            image_resize(self.image, 350, 200)


class Product(models.Model):
    name = models.CharField(max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=7, decimal_places=2, blank=False)
    ratings = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    count_in_stock = models.IntegerField(default=15)

    views = models.IntegerField(default=0)
    order_count = models.IntegerField(default=0)
    details = models.TextField()

    image = models.ImageField(upload_to="shop", blank=True, null=True)
    image2 = models.ImageField(upload_to="shop", blank=True, null=True)
    image3 = models.ImageField(upload_to="shop", blank=True, null=True)
    image4 = models.ImageField(upload_to="shop", blank=True, null=True)
    image5 = models.ImageField(upload_to="shop", blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("-id",)

    def save(self, *args, **kwargs):
        super(Product, self).save(*args, **kwargs)
        self.images()

    def images(self):
        if self.image:
            image_resize(self.image, 500, 500)
        if self.image2:
            image_resize(self.image2, 500, 500)
        if self.image3:
            image_resize(self.image3, 500, 500)
        if self.image4:
            image_resize(self.image4, 500, 500)
        if self.image5:
            image_resize(self.image5, 500, 500)


class Showcase(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name

    def name(self):
        return self.product.name

    def image(self):
        if self.product.image:
            return self.product.image.url

    def details(self):
        return self.product.details

    def product_id(self):
        return self.product.id


def image_resize(image, width, height):
    img = Image.open(image.path)
    size = (width, height)
    img = img.resize(size)
    img.save(image.path)
