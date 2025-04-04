# 🚀 Online Code editor && Compiler 

A **Next.js-based Online Code Compiler** that executes code securely in Docker containers. Supports **Java, JavaScript, and Python** .

---

## ✨ Features

- **Multi-Language Support**: Java, JavaScript, Python
- **Secure Execution**: Docker container isolation
- **Modern Stack**: Next.js frontend + API endpoints
- **Extensible Architecture**: Easy to add new languages

---

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js v16+
- Docker Engine v20+
- npm/yarn

### **1. Clone & Install**
```sh
git clone https://github.com/purnapattela/code-compiler.git
cd code-compiler
npm install --legacy-peer-deps
```

### **2. Build Docker Runners**
```sh
# Build all runners at once
docker build -f Docker/java-runner/Dockerfile -t java-runner .
docker build -f Docker/javascript-runner/Dockerfile -t javascript-runner .
docker build -f Docker/python-runner/Dockerfile -t python-runner .
```

### **3. Start Development Server**
```sh
npm run dev
```

---

## 🚀 Code Execution Guide

### **Java Example**
```sh
echo 'public class Main { public static void main(String[] args) { 
  System.out.println("Hello, Java!"); 
}}' | docker run --rm -i java-runner

```

### **JavaScript Example**
```sh

echo 'console.log("Hello from Node", process.versions.node)' | docker run --rm -i javascript-runner


```

### **Python Example**
```sh
echo 'print("Python Version:", __import__("sys").version)' | docker run --rm -i python-runner

```

---

## 🔮 Roadmap

**Core Improvements**
- [ ] Time/Memory Limits (5s timeout, 100MB RAM)
- [ ] Granular Error Reporting (compile/runtime errors)
- [ ] Rate Limiting API Endpoints

**New Features**
- [ ] Add C++ & Rust Support
- [ ] File Upload Execution
- [ ] Code Sharing UI
- [ ] User Authentication

**Community Goals**
- [ ] CI/CD Pipeline
- [ ] Automated Testing Suite
- [ ] Docker Compose Setup

---

## 🤝 Contributing

### **First-Time Contributors Welcome!**
1. Fork & Clone the Repository
2. Create Feature Branch: `git checkout -b feat/your-feature`
3. Commit Changes: `git commit -m "feat: add rust runner"`
4. Push & Open Pull Request

**Suggested Contributions**:
- Add new language support
- Improve security hardening
- Enhance editor UI (line numbers, syntax highlighting)
- Add test coverage

---

## ⚠️ Security Note
All code execution happens in ephemeral Docker containers with:
- No network access
- Read-only filesystems
- Limited CPU/memory (via future updates)

---

## 📜 License
MIT License - See [LICENSE](LICENSE) for details.

---

## 🌐 Connect
- **GitHub**: [@purnapattela](https://github.com/purnapattela)
- **Instagram**: [@purnapattela](https://instagram.com/purnapattela)
- **Email**: purnapattela@gmail.com

---

## 🚨 Need Help? 
Open a [GitHub Issue](https://github.com/purnapattela/code-compiler/issues) for:
- Bug reports
- Feature requests
- Security concerns
