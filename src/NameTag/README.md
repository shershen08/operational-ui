NameTags are small colored boxes containing the initials of an entity. They are simple ways to identify a resource across a product, such as a purple `PG` tag for a PostgreSQL database.

### Usage with assigned colors

By default, name tags are assigned a color from the Operational palette using a deterministic hash derived from the component's string content.

```jsx
<>
  <NameTag>PG</NameTag>
  <NameTag right>CT</NameTag>
</>
```

### Usage with custom colors

Automatic color assignment is disabled if a color is provided.

```jsx
<>
  <NameTag color="#5e0074" assignColor={false}>
    PG
  </NameTag>
  <NameTag right color="primary" assignColor={false}>
    CT
  </NameTag>
</>
```
