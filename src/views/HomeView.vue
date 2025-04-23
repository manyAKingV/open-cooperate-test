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
                    <div class="company-card" v-for="(company, index) in category.companies" :key="index" @click="fetchChick(category.index,index)">
                        <img :src="company.logo" alt="company.name">
                    </div>
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
            categories:[
                {
                    index:'banking',
                    name:'金融',
                },
                {
                    index:'medical',
                    name:'医疗',
                },
                {
                    index:'government',
                    name:'政府'
                },
            ],

            companyCategories:[
                {
                    name: '金融',
                    index:'banking',
                    companies: []
                },
                {
                    name: '医疗',
                    index:'medical',
                    companies: []
                },
                {
                    name: '政府',
                    index:'government',
                    companies: []
                }
            ],
        };
    },
    async mounted(){
        await this.init();
    },

    methods: {
        async init(){
            // 获取json数据 并正常展示
            const categoriesContext = require.context('../categories', true, /\.json$/);
            
            this.categories.forEach(e => {
                const x = e.index;
                const arr = categoriesContext(`./${x}/${x}.json`);
                let category = this.companyCategories.find(m=>m.index === e.index)
                if (category) {
                    arr.forEach(m=>{
                        m.logo = require(`@/categories/${x}/${m.logo}`)
                        category.companies.push(m)
                    })
                }
            });
            console.log(this.companyCategories);
            
        },
        // 导出pdf功能
        async handleExport(){
            // 输入div的class 和 导出的名称
            exportToPDF('app','landscape.pdf')
        },
        async fetchChick(category,index){
            console.log(category,index); 
            let ctg = this.companyCategories.find(x=>x.index === category)
            console.log(ctg.companies[index])
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
  width: auto;
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