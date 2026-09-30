# SQL transaction pattern
A Prisma transaction can atomically create an attempt and update a progress record: `prisma.$transaction(async tx => { ... })`. This keeps related writes consistent if one operation fails.
