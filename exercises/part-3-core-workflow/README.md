# Part 3 — Core workflow

## Exercise

ทำ workflow หลักของ Microsoft 365 Copilot: เตรียมไฟล์ใน OneDrive แล้วใช้ Chat/Create, Word, Excel, Outlook/Teams, PowerPoint และ Agent Builder

## Scenario

ใช้ไฟล์จำลองใน [`../../files/part-3/`](../../files/part-3/) เท่านั้น ตรวจสิทธิ์ใช้งานก่อนเริ่ม เพราะ Copilot, meeting transcript และ Agent Builder อาจพร้อมใช้งานไม่เท่ากันในแต่ละ tenant

ดาวน์โหลดไฟล์ตัวอย่างทั้งหมดของ Part 3 ได้ที่ [part-3-sample-files.zip](https://github.com/teerasej/work-smarter-with-ai-1/raw/main/files/part-3/part-3-sample-files.zip) แล้วแตกไฟล์ zip ก่อนเริ่มทำแบบฝึกหัด

## Practice map

| Exercise No. | Practice | Primary target | Checkpoint / expected output | Capability-gated fallback |
| --- | --- | --- | --- | --- |
| 1 | [OneDrive preparation](exercise-folders/copilot-upload-file.md) | วางไฟล์ตัวอย่างใน OneDrive เพื่อใช้เป็น context | เปิดไฟล์และเลือกใช้ใน Copilot Chat ได้ | ใช้ไฟล์ที่เปิดใน desktop app หรือวางข้อความสั้น ๆ เป็น context |
| 2 | [Chat/Create](exercise-folders/use-case/exercise-1.md) | สร้างข้อความและแนวคิดจาก prompt | ได้ร่างข้อความหรือแผนที่ตรวจทานได้ | ใช้ Copilot Chat ใน browser |
| 3 | [Word](exercise-folders/start-up/word-feature-1.md) | สร้างหรือปรับเนื้อหาเอกสาร | ได้เนื้อหาที่ review แล้วใน Word | ใช้ Copilot Chat ร่างข้อความแล้ววางใน Word |
| 4 | [Excel](exercise-folders/start-up/feature-4-excel.md) | หา insight จากตาราง | ได้ insight และภาพประกอบการตัดสินใจ | ใช้ Excel วิเคราะห์ด้วยตนเองและ Copilot Chat อธิบายผล |
| 5 | [Outlook/Teams](exercise-folders/use-case/exercise-5.md) | สรุป meeting และสร้าง action items | ได้ summary และรายการติดตามงาน | ใช้ไฟล์ VTT ตัวอย่างใน Copilot Chat หรือสรุปจาก transcript ที่วางไว้ |
| 6 | [PowerPoint](exercise-folders/start-up/feature-5-ppt.md) | สร้างโครงเรื่อง presentation | ได้ presentation outline ที่ตรวจทานได้ | สร้าง outline ใน Copilot Chat แล้วทำสไลด์เอง |
| 7 | [Agent Builder](exercise-folders/agent/README.md) | สร้าง agent สำหรับ proposal, vendor comparison และ product information | ทดสอบ agent พร้อมหลักฐานว่าคำตอบใช้ knowledge หรือระบุเมื่อไม่พบข้อมูล | ใช้ Copilot Chat กับไฟล์เดียวกันและบันทึกข้อจำกัดของ tenant |

ทุก Practice ระบุไฟล์เริ่มต้นและขั้นตอนในหน้ากิจกรรม ข้ามการ share หรือ publish agent หากนโยบายองค์กรไม่อนุญาต
