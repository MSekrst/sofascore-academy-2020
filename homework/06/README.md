# Homework 6 - SofaScore Frontend Academy

Goal of this homework is exploring more advanced React features and patterns. This homework could be later reused as a part of the final project.

Write 3 main components:

1. Accordion component ([Material Design details](https://material.io/archive/guidelines/components/expansion-panels.html#))
2. Modal component
3. Reusable opening logic

## Accordion Component

Accordion has header and content. Header is always visible and triggers content visibility. Content is can be visible or not depending on accordion state.

For separation of accordion state use High Order Component, Render Prop or Custom Hook. This logic will later be used in Modal component too.

Accordion should have transition when opening or closing. To archive transition you will need to know exact accordion content height (ideal Refs use case, maybe even Forwarding refs will be needed).
To archive transition you will need to translate following principle to your code.

```jsx
<Accordion>
  <Header>{/* header markup */}</Header>
  <Content>{/* some dynamic content */}</Content>
</Accordion>
```

Take following structure. To get smooth transitions Content should always be rendered in DOM (when visible and when not visible).
Visibility will be modified with `height` and `overflow` combination.

```jsx
<Accordion>
  <Header>{/* header markup */}</Header>
  <Content style={{ overflow: 'hidden', height: isOpen ? contentHeight : 0 }}>{/* some dynamic content */}</Content>
</Accordion>
```

Lets for example set `contentHeight` to be 350px. Then we would have `height: isOpen ? 350 : 0`. Add transition for height and your bling is ready.

This structure allows us to hide content when not visible but still keep it in DOM as element is not visible because it has overflown (element could be visible if component that render over it have no background, but this could be easily fixed).

If you are having troubles with measuring dynamic height, it could be because you are measuring element that is modified (`Content`). You should modify parent of element you are measuring. If this doesn't help hard code height and we will fix it together.

## Modal Component

Reuse same opening logic as for Accordion component. When rendering portal use React Portal to insert modal on semantically correct DOM position.

## Reusable opening logic

Choose your favorite pattern (high Order Component, Render Props, Custom Hooks) and use it to separate opening and closing logic used in Accordion and Modal components.

### **OPTIONAL** Extra effort 

Try and use React Context to add UI themes (text size changer, or similar) to your app.

## Help

If you get stuck, or didn't understand some part of previous lesson(s) feel free to contact me and I will try my best to clear things up and help.

