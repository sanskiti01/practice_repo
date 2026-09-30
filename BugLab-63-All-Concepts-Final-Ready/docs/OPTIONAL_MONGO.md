# Mongo extension
The Mongo model is intentionally isolated. Example aggregation pattern:
`MongoBug.aggregate([{$match:{difficulty:'HARD'}},{$group:{_id:'$difficulty',count:{$sum:1}}}])`.
References can be modeled by storing `userId` while embedding small immutable metadata; choose based on update frequency and ownership boundaries.
