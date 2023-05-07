# Generated by Django 4.1 on 2023-01-08 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_user_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.PositiveBigIntegerField(choices=[(1, 'User'), (2, 'Guest'), (3, 'Admin'), (4, 'Manager'), (5, 'Superuser')], default=1),
        ),
    ]
