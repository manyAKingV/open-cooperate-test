import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const exportToPDF = async (elementId, filename = 'report.pdf') => {
  const element = document.getElementById(elementId)
  if (!element) return

  // 隐藏导航栏等非必要元素
  const hiddenElements = document.querySelectorAll('.no-export')
  hiddenElements.forEach(el => el.style.display = 'none')

  try {
    // 高清渲染配置
    const canvas = await html2canvas(element, {
      scale: 3,               // 分辨率提升3倍
      useCORS: true,          // 跨域图片处理（网页6）
      logging: false,
      backgroundColor: '#fff'
    })
    
    // PDF尺寸配置
    const A4Width = 210       
    const A4Height = 297       
    const pdf = new jsPDF('p', 'mm', 'a4')
    
    // 智能分页算法（网页3/网页5）
    const imgWidth = A4Width
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let position = 0
    let remainingHeight = imgHeight

    while (remainingHeight > 0) {
      const sectionHeight = Math.min(remainingHeight, A4Height)
      pdf.addImage(canvas, 'JPEG', 0, position, imgWidth, sectionHeight)
      remainingHeight -= A4Height
      position -= A4Height
      if (remainingHeight > 0) pdf.addPage()
    }

    pdf.save(filename)
  } finally {
    // 恢复隐藏元素（网页3）
    hiddenElements.forEach(el => el.style.display = '')
  }
}