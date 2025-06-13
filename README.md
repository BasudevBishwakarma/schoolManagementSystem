🎓 School Management System (Frontend)

A modern School Management System frontend built using Vite, pnpm, Tailwind CSS, and React. This project is designed for modular expansion and clean UI management using tools like Ant Design, React Router, and React Hook Form.

🚀 Features
✅ Authentication with Dummy API (with protected routes)

🎨 Modern UI with Ant Design + Tailwind CSS

🧭 Routing handled by React Router

🧾 Form handling with react-hook-form and validation via zod

📊 Data Visualization with @ant-design/plots

🔄 CRUD Operations on the Grade Page using json-server

🔍 Search, Pagination & Tables implemented on other pages

📅 Date management with dayjs

🔌 Data fetching powered by axios


📁 Tech Stack
| Tech            | Purpose                         |
| --------------- | ------------------------------- |
| Vite            | Project bundler                 |
| pnpm            | Package manager                 |
| Tailwind CSS    | Utility-first styling framework |
| Ant Design      | Component UI framework          |
| React Router    | Navigation and routing          |
| React Hook Form | Form state management           |
| Zod             | Schema validation               |
| Axios           | HTTP client                     |
| dayjs           | Date formatting                 |
| json-server     | Mock REST API for CRUD          |
| antd-plots      | Chart & graph library           |


⚙️ Getting Started

1. Clone the repository
git clone https://github.com/your-username/school-management-system.git
cd school-management-system

2. Install dependencies
pnpm install

3. Start the development server
pnpm dev

4. Run the mock API server
npx json-server db.json5 --watch
⚠️ Make sure the db.json5 file is located outside the main src folder, as it stores the application's mock data.

📌 Notes
Only the Grade page supports full CRUD operations (Create, Read, Update, Delete) via json-server.
Other pages display static data tables with design features like search and pagination for layout and UI demonstration.
The system is designed to be easily extendable, whether you're adding API connections, more charts, or new modules.

🛠 Project Structure (Simplified)
school-management-system/

| Path                 | Description                 |
| -------------------- | --------------------------- |
| `/public`            | Public assets               |
| `/src/components`    | Reusable React components   |
| `/src/pages`         | Route-based page components |
| `/src/services`      | API calls and data handlers |
| `db.json5`           | JSON Server mock database   |
| `tailwind.config.js` | Tailwind CSS configuration  |
| `postcss.config.js`  | PostCSS configuration       |
| `index.html`         | Main HTML template          |
| `README.md`          | Project documentation       |



📬 Feedback
Feel free to raise issues, fork, or submit pull requests. If you find the project helpful, a ⭐️ would be appreciated!
