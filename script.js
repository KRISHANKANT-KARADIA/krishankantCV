const iconPaths = {
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  behance: '<path d="M21 11.5a1.5 1.5 0 0 1-1.5 1.5H16v-3h3.5a1.5 1.5 0 0 1 1.5 1.5z"></path><path d="M16 16h4.5a1.5 1.5 0 0 1 0 3H16v-3z"></path><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h5A1.5 1.5 0 0 1 10 5.5v3A1.5 1.5 0 0 1 8.5 10H3.5A1.5 1.5 0 0 1 2 8.5v-3z"></path><path d="M2 14.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 8.5 21H3.5A1.5 1.5 0 0 1 2 19.5v-3z"></path><line x1="16" y1="6" x2="21" y2="6"></line>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
  "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polygon points="2 17 12 22 22 17"></polygon><polygon points="2 12 12 17 22 12"></polygon>',
  terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
  "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>'
};

const projects = [
  {
    title: "InstaChef Dubai",
    category: "react",
    description: "A premium on-demand personal chef booking platform based in Dubai. Built with customized interactive appointment structures, tier selection grids, and high performance components.",
    tech: ["React.js", "Vite", "Tailwind CSS", "REST API", "Responsive Framework"],
    link: "https://www.instachef.ae/",
    badge: "Featured Product"
  },
  {
    title: "Public Vani Dashboard",
    category: "react",
    description: "A state-of-the-art news curation & high-traffic digital media broadcasting dashboard, rendering real-time articles, multi-media lists, and administrative data configurations.",
    tech: ["React.js", "Redux State", "Dynamic Tables", "Tailwind CSS"],
    link: "https://www.publicvani.com/",
    badge: "Real-time UI"
  },
  {
    title: "Fullstack Guru Academy",
    category: "react",
    description: "A functional online portal for a professional technology bootcamp institute. Empowers dynamic student dashboards, roadmap grids, and matrix management systems.",
    tech: ["React.js", "Next.js", "Node.js Schema", "UI Layout Optimization"],
    link: "https://fullstackguru.net/",
    badge: "EdTech"
  },
  {
    title: "HCAH Nursing Services",
    category: "web",
    description: "A premium medical homecare interface developed to map home-based nursing features, integrated booking, and secure medical forms.",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
    link: "https://www.hcah.in/nursing-services/",
    badge: "Healthcare"
  },
  {
    title: "Jaipur Homecare Services",
    category: "web",
    description: "Localized responsive portal optimizing medical equipment rentals and home nursing bookings around Jaipur, Rajasthan.",
    tech: ["HTML5", "Bootstrap 5.3", "jQuery", "Form Validations"],
    link: "https://jaipurhomecare.com/",
    badge: "Client Portal"
  },
  {
    title: "UHCC Wellness Website",
    category: "web",
    description: "Modernized healthcare clinic landing pages optimized for swift load-times and structural layouts across multiple device viewport breaks.",
    tech: ["HTML5", "CSS3", "JS Animations", "Vite Compiler"],
    link: "https://uhcc.in/",
    badge: "Fluid Layout"
  },
  {
    title: "Anand Engineering Projects",
    category: "web",
    description: "A heavy-machinery & infrastructure manufacturer portfolio showcasing structural layouts, custom estimation components, and engineering catalogs.",
    tech: ["CSS Grid", "Bootstrap", "Interactive Modules"],
    link: "https://www.anandengineerings.in/",
    badge: "B2B Manufacturing"
  },
  {
    title: "ClicknKart E-Commerce",
    category: "web",
    description: "Comprehensive B2C shopping platform rendering fluid grids, product filters, customized add-to-cart operations, and payment interface mocks.",
    tech: ["HTML5", "Vanilla JavaScript", "Sass", "Responsive Images"],
    link: "https://www.clicknkart.com/",
    badge: "Retail Grid"
  },
  {
    title: "Veekay Cabs Booking",
    category: "web",
    description: "Responsive travel rental portal enabling vehicle estimation, live route query mockups, and customer testimonial carousels.",
    tech: ["Tailwind CSS", "JavaScript", "Smooth Scroll Assets"],
    link: "https://www.veekaycabs.com/",
    badge: "Transport"
  },
  {
    title: "Rupankan Archo Interiors",
    category: "web",
    description: "An elegant interactive architecture and design gallery showing portfolio layouts, luxury interior filters, and inquiry form architectures.",
    tech: ["Responsive CSS", "Vanilla JavaScript", "Lightbox Gallery"],
    link: "https://rupankanarchointeriors.com/",
    badge: "Luxury UI"
  },
  {
    title: "Buzzonic Ventures Portal",
    category: "web",
    description: "Corporate landing layout engineered for high conversion rates. Showcases clean UI components and complex, fullyvalidated feedback forms.",
    tech: ["SCSS", "JavaScript ES6", "Form Processing"],
    link: "https://buzzonicventures.com/",
    badge: "Enterprise"
  },
  {
    title: "Run Bhopal Run Org",
    category: "web",
    description: "Event registration dashboard handling dynamic database integrations, ticket maps, and runner profile management systems.",
    tech: ["HTML5", "Tailwind Elements", "JSON Endpoint API"],
    link: "https://www.runbhopalrun.com/",
    badge: "Sports Event"
  },
  {
    title: "Saloon App Hub",
    category: "mobile",
    description: "Double-sided mobile ecosystem (User Booking App + Owner Control Console) crafted to handle appointment slots, real-time booking alerts, and revenue tracking dashboards.",
    tech: ["React Native CLI", "Native Elements", "Redux State", "Push Notifications"],
    link: "#",
    badge: "Dual Architecture"
  },
  {
    title: "Quick-filo Delivery App",
    category: "mobile",
    description: "On-demand hyper-local courier solution operating specialized tracking systems, multi-tier cargo profiles, and instantaneous order routing protocols.",
    tech: ["React Native CLI", "REST API", "Geographical UI Mocks", "Local Cache Storage"],
    link: "#",
    badge: "Logistics"
  },
  {
    title: "DDM Pay FinTech",
    category: "mobile",
    description: "Supercharged payment container with premium security layout logic, instantaneous receipt generation, and transaction history cards.",
    tech: ["React Native CLI", "Secure Keychains", "Flex Grids", "JWT Integration"],
    link: "#",
    badge: "FinTech"
  },
  {
    title: "Payaaramse Wallet",
    category: "mobile",
    description: "Simplistic digital finance wallet providing wallet balances, instant bill-payment layouts, and user profile verification status flows.",
    tech: ["React Native CLI", "UI/UX Design", "Custom Animations", "Validation Libs"],
    link: "#",
    badge: "B2C Wallet"
  }
];

function svg(type) {
  const paths = iconPaths[type];
  if (!paths) return "";
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = svg(node.dataset.icon);
  });
}

function typeHeroText() {
  const target = document.getElementById("typedText");
  const fullText = "Building Scalable Cross-Platform Architectures";
  let index = 0;

  const interval = window.setInterval(() => {
    target.textContent += fullText.charAt(index);
    index += 1;

    if (index >= fullText.length) {
      window.clearInterval(interval);
    }
  }, 85);
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  grid.innerHTML = visibleProjects
    .map((project) => {
      const tech = project.tech.map((item) => `<span>#${item}</span>`).join("");
      const footer =
        project.link !== "#"
          ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">Launch App ${svg("external-link")}</a>`
          : "<span>Private Repository / Sandbox</span>";

      return `
        <article class="project-card">
          <div class="project-main">
            <div class="project-topline">
              <span class="project-badge">${project.badge}</span>
              <span class="project-category">${project.category}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-list">${tech}</div>
          </div>
          <div class="project-footer">${footer}</div>
        </article>
      `;
    })
    .join("");
}

function setupProjectFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function appendTerminalLine(type, text) {
  const output = document.getElementById("terminalOutput");
  const line = document.createElement("p");
  line.className = type === "input" ? "prompt" : "response";
  line.innerHTML = type === "input" ? `<strong>guest@krishandev-sh:~$</strong> ${escapeHtml(text)}` : escapeHtml(text);
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function setupTerminal() {
  const form = document.getElementById("terminalForm");
  const input = document.getElementById("terminalInput");

  appendTerminalLine("input", "whoami");
  appendTerminalLine("output", "Krishan Kant Karadia - Frontend & Mobile Developer. Status: Looking for innovative projects.");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rawCommand = input.value.trim();
    if (!rawCommand) return;

    const command = rawCommand.toLowerCase();
    let response = "";

    switch (command) {
      case "skills":
        response = "React.js, Next.js, Vite, React Native CLI, SCSS, Tailwind CSS, REST APIs, Node.js, Express, MongoDB.";
        break;
      case "experience":
        response = "Buzzonic Ventures (2026), Appinop Technologies (2025), Pam Fincap, Martonline, Banno Technologies.";
        break;
      case "clear":
        document.getElementById("terminalOutput").innerHTML = '<p class="muted">// Welcome! Type "help" to list valid directives.</p>';
        input.value = "";
        return;
      case "contact":
        response = "Email: krishankantkaradia8@gmail.com | Location: Jaipur, Rajasthan.";
        break;
      case "help":
        response = "Available Commands: skills, experience, contact, clear, help";
        break;
      default:
        response = `Command not recognized: "${command}". Type "help" for a list of statements.`;
    }

    appendTerminalLine("input", rawCommand);
    appendTerminalLine("output", response);
    input.value = "";
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const hasAllFields = ["name", "email", "message"].every((field) => String(formData.get(field)).trim());

    if (!hasAllFields) return;

    success.hidden = false;
    window.setTimeout(() => {
      success.hidden = true;
      form.reset();
    }, 5000);
  });
}

function setupPrintButton() {
  document.getElementById("printBtn").addEventListener("click", () => window.print());
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateIcons();
  typeHeroText();
  renderProjects();
  setupProjectFilters();
  setupTerminal();
  setupContactForm();
  setupPrintButton();
});
