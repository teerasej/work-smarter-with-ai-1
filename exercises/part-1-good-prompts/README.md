# Part 1 — Create better prompts

## Exercise

ฝึกเขียน prompt สำหรับ **Copilot in Edge** โดยเติมข้อมูลทีละชั้น: **Goal**, **Context**, **Source**, และ **Expectations**. ให้นึกถึงการสั่งอาหาร: Goal คือเมนูที่ต้องการ, Context คือข้อจำกัดของคนกิน, Source คือวัตถุดิบที่อนุญาตให้ใช้, และ Expectations คือหน้าตาอาหารที่อยากได้รับ.

## Scenario

คุณกำลังเตรียมสรุปประเด็นจากหน้าเว็บให้ทีมผู้บริหาร ใช้หน้า [Get started writing prompts in Microsoft 365 Copilot](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot) เป็นแหล่งข้อมูลสาธารณะสำหรับการฝึก และเปิด [worksheet](../../files/part-1/prompt-comparison-worksheet.docx) เพื่อบันทึกผลของแต่ละรอบ

## Practice 1 — Goal

**Prerequisites:** เปิดหน้าเว็บอ้างอิงใน Microsoft Edge และลงชื่อเข้าใช้ Copilot in Edge ถ้ามี

**Primary target:** บอกงานที่ต้องการให้ชัดเจน

**Steps:**

1. ใน Copilot in Edge ส่ง prompt: `ช่วยสรุปเนื้อหาในหน้าเว็บนี้ให้หน่อย`
2. คัดลอกหรือบันทึกคำตอบลง worksheet ในช่อง Practice 1
3. จดสิ่งที่ยังไม่ชัดเจนในคำตอบ

**Checkpoint / expected output:** ได้บทสรุปแรกที่ระบุสาระของหน้าเว็บ และเห็นว่าคำว่า “สรุป” ยังเปิดกว้าง

**Fallback:** หากไม่มี Copilot in Edge ให้คัดลอกข้อความสำคัญจากหน้าเว็บไปวางใน Copilot Chat แล้วใช้ prompt เดิม พร้อมระบุว่าเป็นข้อความที่วางไว้

## Practice 2 — Goal + Context

**Prerequisites:** มีผลจาก Practice 1 ใน worksheet

**Primary target:** ให้ Copilot รู้สถานการณ์และผู้รับสาร

**Steps:**

1. ส่ง prompt: `ช่วยสรุปเนื้อหาในหน้าเว็บนี้ให้หน่อย ฉันกำลังเตรียมตัวเข้าประชุมกับทีมผู้บริหาร และต้องการเข้าใจประเด็นสำคัญที่อาจมีผลต่อธุรกิจอย่างรวดเร็ว`
2. บันทึกคำตอบลง worksheet
3. เปรียบเทียบสิ่งที่เปลี่ยนจาก Practice 1 โดยเฉพาะน้ำหนักของประเด็นธุรกิจ

**Checkpoint / expected output:** ได้สรุปที่เลือกประเด็นโดยคำนึงถึงการประชุมผู้บริหาร

**Fallback:** ใช้ Copilot Chat พร้อมข้อความหน้าเว็บที่วางไว้ และระบุ Context เดียวกัน

## Practice 3 — Goal + Context + Source

**Prerequisites:** มีผลจาก Practice 2

**Primary target:** จำกัดหลักฐานที่ Copilot ใช้ และสังเกตการอ้างอิงข้อมูล

**Steps:**

1. ส่ง prompt: `ช่วยสรุปเนื้อหาในหน้าเว็บนี้ให้หน่อย ฉันกำลังเตรียมตัวเข้าประชุมกับทีมผู้บริหาร และต้องการเข้าใจประเด็นสำคัญที่อาจมีผลต่อธุรกิจอย่างรวดเร็ว ให้ใช้ข้อมูลจากหน้าเว็บที่กำลังเปิดอยู่ใน Edge นี้เป็นหลัก หากข้อมูลสำคัญบางอย่างไม่มีอยู่ในหน้าเว็บนี้ ให้ระบุว่าไม่พบข้อมูล แทนการคาดเดา`
2. บันทึกคำตอบและหลักฐานที่ Copilot กล่าวถึงใน worksheet
3. ทำเครื่องหมายข้อที่ไม่พบข้อมูลหรือควรตรวจสอบต่อ

**Checkpoint / expected output:** ได้คำตอบที่แยกข้อมูลจากหน้าเว็บออกจากสิ่งที่ไม่มีหลักฐานรองรับ

**Fallback:** วางข้อความหน้าเว็บลง Copilot Chat แล้วแทนคำว่า “หน้าเว็บที่กำลังเปิด” ด้วย “ข้อความที่วางไว้ด้านล่าง”

## Practice 4 — Goal + Context + Source + Expectations

**Prerequisites:** มีผลจาก Practice 3

**Primary target:** กำหนดรูปแบบผลลัพธ์ที่นำไปใช้ต่อได้

**Steps:**

1. ส่ง prompt เดิมจาก Practice 3 แล้วเติม: `ตอบเป็นภาษาไทยแบบเข้าใจง่าย โดยจัดเป็น: (1) สรุป 5 ข้อ (2) ผลกระทบต่อธุรกิจ 3 ข้อ (3) ความเสี่ยงหรือข้อควรระวัง (4) คำถามติดตาม 3 ข้อ`
2. บันทึกผลลัพธ์สุดท้ายลง worksheet
3. เขียน reflection ว่าส่วนใดของ prompt เปลี่ยนคุณภาพคำตอบมากที่สุด และเพราะอะไร

**Checkpoint / expected output:** ได้ brief ที่มีโครงสร้างสำหรับนำไปคุยต่อ พร้อมคำถามติดตามที่ตรวจสอบได้

**Fallback:** ใช้ Copilot Chat พร้อมข้อความหน้าเว็บที่วางไว้ และขอรูปแบบผลลัพธ์เดียวกัน

## Further learning

- [Microsoft Support: Get started writing prompts in Microsoft 365 Copilot](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot)
- [Microsoft Learn: Write effective prompts and do more with prompting](https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/)
