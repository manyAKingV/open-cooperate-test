<template>
    <div id="app">
        <!-- 导航栏 -->
        <a-layout-header>
            <div class="logo">
                <img src="@/assets/logo.png" alt="Company Logo">
            </div>
        </a-layout-header>
        <!-- 内容区域 -->
        <div class="hero-section">
            <a-button class="no-export" @click="handleExport">导出PDF</a-button>
            <h1>Welcome to Open-Landscape</h1>
            <p>Discover the latest trends and innovations in technology.</p>
            <a-button type="primary">Learn More</a-button>
        </div>
        <a-layout-content class="content-container">
            <div v-for="category in companyCategories" :key="category.name" class="category-section">
                <h2>{{ category.name }}</h2>
                <div class="company-icons">
                    <a-card class="company-card" v-for="(company, index) in category.companies" :key="index">
                        <img :src="company.logo" alt="company.name">
                    </a-card>
                </div>
            </div>
        </a-layout-content>
        <!-- 页脚 -->
        <a-layout-footer>
            <div class="bottom-text">@北京云网互科技有限公司</div>
            <div class="bottom-text">京ICP备2025XXXX号</div>
        </a-layout-footer>
    </div>
</template>
  
<script>
import { exportToPDF } from "@/utils/pdfExport";

export default {
    name: 'App',
    data() {
        return {
            companyCategories:[
                {
                    name: '金融',
                    companies: [
                        { logo: require('@/assets/logo01.png'), name: '金融公司1' },
                        { logo: require('@/assets/logo02.png'), name: '金融公司2' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司3' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司1' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司2' },
                        { logo: require('@/assets/logo03.png'), name: '金融公司3' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司3' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司1' },
                        { logo: require('@/assets/logo01.png'), name: '金融公司2' },
                        { logo: require('@/assets/logo03.png'), name: '金融公司3' }
                    ]
                },
                {
                    name: '医疗',
                    companies: [
                        { logo: require('@/assets/logo04.png'), name: '医疗公司1' },
                        { logo: require('@/assets/logo03.png'), name: '医疗公司2' },
                        { logo: require('@/assets/logo01.png'), name: '医疗公司3' }
                    ]
                },
                {
                    name: '政府',
                    companies: [
                        { logo: require('@/assets/logo.png'), name: '政府项目1' },
                        { logo: require('@/assets/logo03.png'), name: '政府项目2' },
                        { logo: require('@/assets/logo04.png'), name: '政府项目3' }
                    ]
                }
            ],
        };
    },
    methods: {
        async handleExport(){
            exportToPDF('app','landscape.pdf')
        }
    }
};
</script>

<style scoped>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #3e3e3f;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.hero-section {
  background: url('https://picsum.photos/1920/1080') no-repeat center center;
  background-size: cover;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-section h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-section p {
  font-size: 24px;
  margin-bottom: 40px;
}

.content-container {
    padding: 50px;
    background-color: #f5f5f5;
}

.company-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 20px;
}

.company-card {
  height: 75px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10%;
  transition: transform 0.3s ease;
}

.company-card:hover {
  transform: translateY(-5px);
}

.company-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a-layout-footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: smaller;
}
</style>    