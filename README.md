# swdev-final
วิธีการ run บนเครื่อง
- clone repository นี้ ลงเครื่อง
- cd (change directory) ไปยัง folder ของ repository นี้
- ใช้คำสั่ง `docker-compose -f docker-compose-build.yml build` เพื่อทำการ build image บน docker
- ใช้คำสั่ง `docker-compose -f docker-compose-deploy.yml up -d` เพื่อทำการ deploy บน docker
- สามารถเข้าถึงหน้า web-app ได้ทางลิงค์ localhost:3000 สำหรับในส่วนของ front-end และลิงค์ localhost:5000 สำหรับ back-end
