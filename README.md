# m-btn-test

A reusable Vue 3 button component with Tailwind CSS 4 styling and Font Awesome support. Customize your buttons with sizes, colors, variants, and icons effortlessly!

## 📦 Installation

Install the package via npm:

```bash
npm install m-btn-test
```

**Prerequisites:** Ensure your project already has Vue 3 (version 3.4.0 or higher) and Tailwind CSS 4 set up, as this component relies on Tailwind CSS classes for styling and Vue 3 for functionality.

## 🧑‍💻 Usage

You can use the **m-btn** component in your Vue 3 application either by registering it globally or locally in specific components.

### 🌐 Global Registration

Register the component globally in your Vue app so it can be used anywhere:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import { MBtn } from 'm-btn-test';

const app = createApp(App);
app.component('m-btn', MBtn);
app.mount('#app');
```
Now you can use <m-btn> anywhere in your app.

### 📦 Local Registration

Alternatively, import and use the component in specific components:

```html
<template>
  <m-btn color="primary" rounded label="Click Me" />
</template>

<script setup>
import { MBtn } from 'm-btn-test';
</script>
```

## 🎛️ Props
The **m-btn** component offers a wide range of props to customize its appearance and behavior. Below is a detailed table of all available props:

| Prop                  | Type     | Default    | Description |
|-----------------------|----------|------------|-------------|
| `label`               | String   | `'Button'` | The text displayed on the button. Used as aria-label and title for icon-only buttons to improve accessibility. |
| `sm`                  | Boolean  | `false`    | Sets the button to small size (height: 2.25rem, text: small). Cannot be combined with md or lg. |
| `md`                  | Boolean  | `false`    | Sets the button to medium size (height: 2.5rem, text: base). Default size if sm and lg are not specified. |
| `lg`                  | Boolean  | `false`    | Sets the button to large size (height: 2.75rem, text: large). Cannot be combined with sm or md. |
| `color`               | String   | `'primary'`| Sets the button’s color variant. Options: primary, secondary, tertiary, accent, info, success, warning, error. Ignored if a custom class is provided. |
| `outline`             | Boolean  | `false`    | Applies an outline style with a transparent background and colored border. Cannot be combined with text, tonal, or elevated. |
| `text`                | Boolean  | `false`    | Applies a text-only style with no background by default. Cannot be combined with outline, tonal, or elevated. |
| `tonal`               | Boolean  | `false`    | Applies a tonal style with a light background. Cannot be combined with outline, text, or elevated. |
| `elevated`            | Boolean  | `false`    | Applies an elevated style with a shadow and hover scale effect. Cannot be combined with outline, text, or tonal. |
| `rounded`             | Boolean  | `false`    | Applies rounded corners (rounded-lg). Cannot be combined with full. |
| `full`                | Boolean  | `false`    | Applies fully rounded corners (pill shape, rounded-full). Cannot be combined with rounded. |
| `icon`                | String   | `null`     | Font Awesome icon name for icon-only buttons (e.g., 'fa-solid fa-code'). Used when onlyIcon is true. Requires Font Awesome setup. |
| `licon`               | String   | `null`     | Font Awesome icon name for the left side (e.g., 'fa-solid fa-code'). Shown when onlyIcon and loading are false. Requires Font Awesome setup. |
| `ricon`               | String   | `null`     | Font Awesome icon name for the right side (e.g., 'fa-solid fa-code'). Shown when onlyIcon and loading are false. Requires Font Awesome setup. |
| `onlyIcon`            | Boolean  | `false`    | Renders an icon-only button (no text, uses icon prop). Adjusts padding to make the button square. |
| `link`                | String   | `null`     | Converts the button into an `<a>` tag with the specified URL. Sets target to `_self` by default. |
| `autofocus`           | Boolean  | `false`    | Automatically focuses the button on render. |
| `disabled`            | Boolean  | `false`    | Disables the button, applying a grayscale filter and reducing opacity (`opacity-50`). |
| `form`                | String   | `null`     | The ID of the associated form. Used for form submission buttons. |
| `formaction`          | String   | `null`     | The URL to submit the form to. Used for form submission buttons. |
| `formenctype`         | String   | `null`     | The form encoding type. Options: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`. |
| `formmethod`          | String   | `null`     | The form submission method. Options: `get`, `post`. |
| `formnovalidate`      | Boolean  | `false`    | Disables form validation on submission. |
| `formtarget`          | String   | `null`     | The target for form submission. Options: `_blank`, `_self`, `_parent`, `_top`. Custom values are also allowed. |
| `popovertarget`       | String   | `null`     | The ID of the popover element to control. |
| `popovertargetaction` | String   | `null`     | The popover action to perform. Options: `hide`, `show`, `toggle`. |
| `name`                | String   | `null`     | The name attribute for form inputs. |
| `type`                | String   | `'button'` | The button type. Options: `button`, `reset`, `submit`. Only applies when the component renders as a `<button>`. |
| `value`               | String   | `null`     | The value attribute for form inputs. |
| `loading`             | Boolean  | `false`    | Displays a loading spinner (`fa-solid fa-spinner`) with a spin animation. Disables `licon`, `ricon`, and `icon` while active. Shows the label unless `onlyIcon` is true. |

## ✨ Examples

Below are examples demonstrating the various ways to use the **m-btn** component, showcasing its sizes, variants, icons, and states.

```html
<template>
  <div class="space-y-4">
    <!-- Sizes -->
    <div class="space-y-2">
      <h3>Sizes</h3>
      <m-btn color="primary" sm label="Small Button" />
      <m-btn color="primary" md label="Medium Button" />
      <m-btn color="primary" lg label="Large Button" />
    </div>

    <!-- Variants -->
    <div class="space-y-2">
      <h3>Variants</h3>
      <m-btn color="primary" rounded label="Default Primary" />
      <m-btn color="primary" outline rounded label="Outline Primary" />
      <m-btn color="primary" text rounded label="Text Primary" />
      <m-btn color="primary" tonal rounded label="Tonal Primary" />
      <m-btn color="primary" elevated rounded label="Elevated Primary" />
    </div>

    <!-- Colors -->
    <div class="space-y-2">
      <h3>Colors</h3>
      <m-btn color="primary" rounded label="Primary" />
      <m-btn color="secondary" rounded label="Secondary" />
      <m-btn color="tertiary" rounded label="Tertiary" />
      <m-btn color="accent" rounded label="Accent" />
      <m-btn color="info" rounded label="Info" />
      <m-btn color="success" rounded label="Success" />
      <m-btn color="warning" rounded label="Warning" />
      <m-btn color="error" rounded label="Error" />
    </div>

    <!-- Shapes -->
    <div class="space-y-2">
      <h3>Shapes</h3>
      <m-btn color="primary" rounded label="Rounded" />
      <m-btn color="primary" full label="Pill Shape" />
    </div>

    <!-- Icons -->
    <div class="space-y-2">
      <h3>Icons</h3>
      <m-btn color="primary" rounded label="Left Icon" licon="fa-solid fa-code" />
      <m-btn color="primary" rounded label="Right Icon" ricon="fa-solid fa-code" />
      <m-btn color="primary" rounded label="Both Icons" licon="fa-solid fa-code" ricon="fa-solid fa-heart" />
      <m-btn color="primary" rounded label="Icon Only" onlyIcon icon="fa-solid fa-code" />
    </div>

    <!-- States -->
    <div class="space-y-2">
      <h3>States</h3>
      <m-btn color="primary" rounded label="Loading" loading />
      <m-btn color="primary" rounded label="Loading with Icons" loading licon="fa-solid fa-code" />
      <m-btn color="primary" rounded label="Disabled" disabled />
      <m-btn color="primary" rounded label="Disabled with Icons" disabled licon="fa-solid fa-code" ricon="fa-solid fa-heart" />
    </div>

    <!-- Custom Class -->
    <div class="space-y-2">
      <h3>Custom Class</h3>
      <m-btn class="bg-blue-500 text-white" rounded label="Custom Style" />
      <m-btn class="bg-green-500 text-white" rounded label="Custom with Icons" licon="fa-solid fa-code" />
    </div>

    <!-- Link -->
    <div class="space-y-2">
      <h3>Link</h3>
      <m-btn color="primary" rounded label="Visit Site" link="https://example.com" />
    </div>
  </div>
</template>
```

## ℹ️ Notes

- **Custom Classes**:  
  If you provide a custom `class` prop (e.g., `class="bg-blue-500 text-white"`), the `color` prop will be ignored, allowing your custom styles to take precedence.

- **Icon Support**:  
  Icons require **Font Awesome** to be set up in your project. Use the format `fa-solid fa-icon-name` (e.g., `fa-solid fa-code`).

- **Accessibility**:  
  For icon-only buttons (`onlyIcon`), the `label` prop is used as the `aria-label` and `title` to ensure accessibility for screen readers.

## ⚖️ License

MIT

## 👤 Author

Jotnar