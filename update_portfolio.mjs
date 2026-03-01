import fs from 'fs';

const fileContent = fs.readFileSync('data/portfolio.ts', 'utf-8');

const newSkills = `skills: [
    {
      category: { en: "Frontend Technologies", ja: "フロントエンド技術" },
      description: { en: "These are the core languages, frameworks, and libraries used to build the user-facing side of web applications.", ja: "Webアプリケーションのユーザー向け部分を構築するために使用されるコアとなる言語、フレームワーク、ライブラリです。" },
      subcategories: [
        { name: { en: "Languages & Concepts", ja: "言語とコンセプト" }, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "DOM"] },
        { name: { en: "Frameworks & Libraries", ja: "フレームワークとライブラリ" }, skills: ["React.js", "Next.js", "JSS Adapter"] },
        { name: { en: "Styling & UI", ja: "スタイリングとUI" }, skills: ["Tailwind CSS", "Bootstrap", "SASS", "Storybook"] }
      ]
    },
    {
      category: { en: "Backend & APIs", ja: "バックエンドとAPI" },
      description: { en: "These technologies power the server side, data exchange, and application logic.", ja: "サーバーサイド、データ交換、アプリケーションのロジックを支える技術です。" },
      subcategories: [
        { name: { en: "Frameworks", ja: "フレームワーク" }, skills: ["Express.js"] },
        { name: { en: "Data Formats & Architectures", ja: "データ形式とアーキテクチャ" }, skills: ["REST API", "JSON", "XML"] }
      ]
    },
    {
      category: { en: "Databases", ja: "データベース" },
      description: { en: "Tools used for storing, querying, and managing data.", ja: "データの保存、検索、管理に使用されるツールです。" },
      subcategories: [
        { name: { en: "Relational (SQL)", ja: "リレーショナル (SQL)" }, skills: ["MySQL", "OracleDB"] },
        { name: { en: "NoSQL", ja: "NoSQL" }, skills: ["MongoDB"] }
      ]
    },
    {
      category: { en: "Cloud, Hosting & Deployment", ja: "クラウド、ホスティング、デプロイ" },
      description: { en: "Platforms used to host applications and manage cloud databases.", ja: "アプリケーションのホスティングやクラウドデータベースの管理に使用されるプラットフォームです。" },
      subcategories: [
        { name: { en: "Hosting & PaaS", ja: "ホスティングとPaaS" }, skills: ["Vercel", "Netlify", "Heroku"] },
        { name: { en: "Cloud Databases", ja: "クラウドデータベース" }, skills: ["MongoDB Atlas"] }
      ]
    },
    {
      category: { en: "Version Control", ja: "バージョン管理" },
      description: { en: "Tools for tracking code changes and collaborating on repositories.", ja: "コードの変更を追跡し、リポジトリで協力するためのツールです。" },
      subcategories: [
        { name: { en: "Systems", ja: "システム" }, skills: ["Git"] },
        { name: { en: "Platforms", ja: "プラットフォーム" }, skills: ["GitHub", "GitLab", "Bitbucket"] }
      ]
    },
    {
      category: { en: "Design & Project Management", ja: "デザインとプロジェクト管理" },
      description: { en: "Tools used for planning, agile tracking, and UI/UX prototyping.", ja: "計画、アジャイル追跡、UI/UXプロトタイピングに使用されるツールです。" },
      subcategories: [
        { name: { en: "Design & Prototyping", ja: "デザインとプロトタイピング" }, skills: ["Figma"] },
        { name: { en: "Project Management & Agile", ja: "プロジェクト管理とアジャイル" }, skills: ["Jira", "Confluence", "Trello", "Azure DevOps"] }
      ]
    },
    {
      category: { en: "Development Tools & Environment", ja: "開発ツールと環境" },
      description: { en: "The software, editors, and environments used day-to-day to write and manage code.", ja: "コードの作成や管理に日常的に使用されるソフトウェア、エディタ、環境です。" },
      subcategories: [
        { name: { en: "IDEs & Text Editors", ja: "IDEとテキストエディタ" }, skills: ["Visual Studio Code", "Visual Studio", "IntelliJ IDEA", "Sublime Text", "Notepad++"] },
        { name: { en: "Database Management IDEs", ja: "データベース管理IDE" }, skills: ["Studio 3T"] },
        { name: { en: "Package Managers & CLI", ja: "パッケージマネージャーとCLI" }, skills: ["Yarn", "Bash"] }
      ]
    },
    {
      category: { en: "Testing, Debugging & Accessibility", ja: "テスト、デバッグ、アクセシビリティ" },
      description: { en: "Tools to ensure code works properly and is accessible to all users.", ja: "コードが正しく機能し、すべてのユーザーがアクセスできることを確認するためのツールです。" },
      subcategories: [
        { name: { en: "Debugging & APIs", ja: "デバッグとAPI" }, skills: ["Chrome Developer Tools", "Postman"] },
        { name: { en: "Accessibility (a11y)", ja: "アクセシビリティ (a11y)" }, skills: ["NVDA (Screen Reader)"] }
      ]
    }
  ],`;

const regex = /skills: \[(?:[^\[\]]|\[(?:[^\[\]]|\[[^\[\]]*\])*\])*\],/;
const updatedContent = fileContent.replace(regex, newSkills);

fs.writeFileSync('data/portfolio.ts', updatedContent);
console.log('Done replacing skills');
