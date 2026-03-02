export const portfolioData = {
  skills: [
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
  ],
  experience: [
    {
      id: 1,
      role: {
        title: {
          en: "Frontend Developer",
          ja: "フロントエンド開発者",
        },
        subheading: {
          en: "Deloitte",
          ja: "デロイト",
        },
      },
      companies: [
        {
          name: { en: "Insurance", ja: "保険" },
          period: { en: "Sept 2023 - Present", ja: "2023年9月 - 現在" },
          description: {
            en: [
              "Develop and maintain client Member and Admin Portals utilizing ReactJS, Next.js, TypeScript, and Styled Components, ensuring seamless integration with backend REST APIs.",
              "Translate complex UI/UX Figma designs into highly responsive, interactive web interfaces and document UI components using Storybook to establish a consistent design system.",
              "Engineer unit tests to ensure code reliability and implement Google Analytics event trackers to capture critical user engagement data.",
              "Collaborate cross-functionally within an Agile framework, aligning with QA and Sitecore teams during sprint planning, defect triage, and peer code review sessions to consistently meet project requirements.",
              "Streamline the release process by managing front-end deployments in Azure DevOps test environments, actively supporting production releases, and maintaining detailed release documentation in Confluence.",
              "Present project milestones, sprint progress, and regular status reports to client during sprint reviews and quarterly checks."
            ],
            ja: [
              "ReactJS、Next.js、TypeScript、Styled Componentsを活用してクライアントのメンバーポータルおよび管理者ポータルを開発・保守し、バックエンドのREST APIとのシームレスな統合を確保。",
              "複雑なUI/UXのFigmaデザインを、レスポンシブでインタラクティブなWebインターフェースに変換し、Storybookを使用してUIコンポーネントをドキュメント化して一貫したデザインシステムを確立。",
              "コードの信頼性を確保するための単体テストを構築し、Google Analyticsのイベントトラッカーを実装して重要なユーザーエンゲージメントデータを取得。",
              "アジャイルフレームワーク内で部門横断的に協力し、スプリントプランニング、欠陥のトリアージ、ピアコードレビューのセッションでQAおよびSitecoreチームと連携し、プロジェクトの要件を一貫して満たす。",
              "Azure DevOpsのテスト環境でのフロントエンドのデプロイを管理し、本番環境のリリースを積極的にサポートし、Confluenceで詳細なリリースドキュメントを維持することで、リリースプロセスを合理化。",
              "スプリントレビューや四半期ごとのチェックにおいて、プロジェクトのマイルストーン、スプリントの進捗、定期的なステータスレポートをクライアントに提示。"
            ],
          },
        },
        {
          name: { en: "Automotive", ja: "自動車" },
          period: { en: "Nov 2022 - May 2023", ja: "2022年11月 - 2023年5月" },
          description: {
            en: [
              "Translated Figma designs into fully responsive, pixel-perfect user interfaces using Next.js and SCSS.",
              "Authored detailed technical documentation for pull requests in Confluence to streamline code reviews and maintain project knowledge.",
              "Managed frontend deployments to testing and staging environments to support rigorous QA workflows.",
              "Communicated project milestones, technical updates, and development progress to cross-functional teams."
            ],
            ja: [
              "Next.jsとSCSSを使用して、Figmaデザインを完全なレスポンシブでピクセルパーフェクトなユーザーインターフェースに変換。",
              "コードレビューを合理化し、プロジェクトの知識を維持するために、Confluenceでプルリクエストの詳細な技術ドキュメントを作成。",
              "厳格なQAワークフローをサポートするために、テスト環境およびステージング環境へのフロントエンドのデプロイを管理。",
              "プロジェクトのマイルストーン、技術的な更新、開発の進捗状況を多機能チームに伝達。"
            ],
          },
        },
        {
          name: { en: "Internal", ja: "社内" },
          period: { en: "Sept 2022 - Oct 2022", ja: "2022年9月 - 2022年10月" },
          description: {
            en: [
              "Co-developed an internal web portal exclusively for Frontend Developers to showcase portfolios, technical skills, and project contributions",
              "Designed intuitive UI/UX wireframes and prototypes using Figma, subsequently implementing the full-stack solution with the team",
              "Authored technical documentation to ensure system maintainability and streamline future developer onboarding"
            ],
            ja: [
              "フロントエンド開発者がポートフォリオ、技術スキル、プロジェクトへの貢献を紹介するための専用社内ウェブポータルを共同開発",
              "Figmaを使用して直感的なUI/UXワイヤーフレームとプロトタイプを設計し、その後チームでフルスタックソリューションとして実装",
              "システムの保守性を確保し、将来の開発者のオンボーディングを円滑に行うための技術ドキュメントを作成"
            ],
          },
        },
        {
          name: { en: "Bootcamp", ja: "ブートキャンプ" },
          period: { en: "Mar 2022 - Aug 2022", ja: "2022年3月 - 2022年8月" },
          description: {
            en: [
              "Translated Figma UI/UX designs into a fully functional, responsive web application using React.js",
              "Integrated external APIs for dynamic data fetching and state management",
              "Attended seminars with an international team to align on frontend development best practices, agile workflows, and engineering ethics",
              "Presented and successfully delivered the final project to the technical team, articulating design choices and technical implementation"
            ],
            ja: [
              "React.jsを使用してFigmaのUI/UXデザインを完全な機能を持つレスポンシブWebアプリケーションに変換",
              "動的なデータ取得と状態管理のために外部APIを統合",
              "国際的なチームとのセミナーに参加し、フロントエンド開発のベストプラクティス、アジャイルワークフロー、エンジニアリング倫理についてすり合わせを実施",
              "設計の選択と技術的な実装について説明し、最終プロジェクトを技術チームにプレゼンして無事に納品"
            ],
          },
        },
      ]
    },
    {
      id: 2,
      role: {
        title: {
          en: "Trainee",
          ja: "研修生",
        },
        subheading: {
          en: "Oracle",
          ja: "オラクル",
        },
      },
      companies: [
        {
          name: { en: "Utilities", ja: "公益事業" },
          period: { en: "Aug 2021 - Nov 2021", ja: "2021年8月 - 2021年11月" },
          description: {
            en: [
              "Assisted in translating technical design specifications into functional code under the guidance of senior developers.",
              "Conducted unit testing based on established test plans to learn quality assurance processes and identify bugs.",
              "Drafted technical documentation for newly developed programs to support team knowledge sharing and code maintainability.",
              "Prepared regular status reports and actively participated in team syncs to track project contributions and learning progress.",
              "Gained hands-on exposure to enterprise software by working within the Oracle Utilities Customer Care and Billing (CC&B) development environment."
            ],
            ja: [
              "シニア開発者の指導の下、技術設計仕様を機能するコードに変換する作業を支援。",
              "品質保証プロセスを学び、バグを特定するために、確立されたテスト計画に基づいて単体テストを実施。",
              "チームの知識共有とコードの保守性をサポートするために、新しく開発されたプログラムの技術ドキュメントを作成。",
              "定期的なステータスレポートを作成し、チームの同期会議に積極的に参加して、プロジェクトへの貢献や学習の進捗を報告。",
              "Oracle Utilities Customer Care and Billing (CC&B) の開発環境で作業することで、エンタープライズソフトウェアの実践的な経験を取得。"
            ],
          },
        }
      ]
    },
  ],
  projects: [
    {
      id: 1,
      title: {
        en: "Space Tourism Multi-page Website",
        ja: "宇宙旅行マルチページウェブサイト",
      },
      image: "/space-tourism.png",
      description: {
        en: "An immersive, multi-page web application for a fictional space tourism agency, engineered using React.js and pure CSS. It boasts a fully responsive architecture, smooth interactive elements, and a modern, sleek layout designed to captivate users while showcasing space travel destinations.",
        ja: "架空の宇宙旅行代理店向けに構築された、没入感のあるマルチページWebアプリケーション。React.jsとCSSを駆使し、完全なレスポンシブ対応、滑らかなインタラクティブ要素、そして宇宙旅行の魅力を最大限に引き出すモダンで洗練されたレイアウトを実現しています。",
      },
      tech: ["React.js", "CSS", "API"],
      link: "https://space-tourism-react-app.vercel.app/",
    },
    {
      id: 2,
      title: {
        en: "Local Forum Website",
        ja: "ローカルフォーラムサイト",
      },
      image: "/ph-forum.png",
      description: {
        en: "A conceptual local community forum interface, styled exclusively with advanced CSS techniques. This project highlights proficiency in building complex layouts, ensuring seamless responsiveness, and implementing sophisticated hover and button animations.",
        ja: "CSSのみを用いてスタイリングされた、架空のローカルコミュニティフォーラムのインターフェース。複雑なレイアウトの構築、シームレスなレスポンシブ対応、洗練されたホバーおよびボタンアニメーションの実装力を示しています。",
      },
      tech: ["HTML", "CSS"],
      link: "https://rexleonardo.gitlab.io/phforum/",
    },
    {
      id: 3,
      title: {
        en: "Order Summary Component",
        ja: "注文概要コンポーネント",
      },
      image: "/order-summary.png",
      description: {
        en: "A robust Next.js frontend component developed with TypeScript and SASS. It focuses on pixel-perfect design translation, semantic structure, and maintainable styling practices to deliver an elegant, interactive order summary UI.",
        ja: "Next.js、TypeScript、SASSを用いて開発された堅牢なフロントエンドコンポーネント。ピクセルパーフェクトなデザイン再現、セマンティックな構造、保守性の高いスタイリングに注力し、エレガントでインタラクティブな注文概要UIを実現しています。",
      },
      tech: ["Next.js", "TypeScript", "SASS"],
      link: "https://order-summary-xi-seven.vercel.app/",
    },
  ],
};
