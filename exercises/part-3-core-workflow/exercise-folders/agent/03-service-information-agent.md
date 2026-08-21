# Exercise 3: สร้าง Service Information Agent

แบบฝึกหัดสุดท้ายนี้ พลจะพาพวกเรากลับมาใช้ flow แบบเดียวกับ Agent ตัวแรก แต่เพิ่ม **Knowledge** จากเอกสาร PDF เพื่อให้ Agent ช่วยค้นและอธิบายข้อมูลบริการที่มี source รองรับครับ

ข้อความที่ Agent ตอบอาจแตกต่างจากตัวอย่าง ให้เราตรวจว่า Agent ใช้ source ที่กำหนดและยอมรับเมื่อ source ไม่มีคำตอบนะครับ

> **License:** ต้องใช้บัญชีที่เข้าถึง Microsoft 365 Copilot และ Agent Builder ได้ การเพิ่มไฟล์เป็น Knowledge อาจถูกจำกัดโดย policy ขององค์กร

## Prerequisites

- ทำ [Exercise 2: Vendor Comparison Advisor](02-vendor-comparison-advisor.md)
- ดาวน์โหลด [`Organization_Service_Catalog_Quick_Guide.pdf`](../../../../files/part-3/Organization_Service_Catalog_Quick_Guide.pdf)

## Scenario 1: ตอบคำถามบริการจาก source ที่กำหนด

### Practice 1: สร้าง Agent และเพิ่ม Knowledge

**Primary target:** สร้าง Agent ที่ใช้ PDF เป็นแหล่งข้อมูลหลักสำหรับตอบคำถามเกี่ยวกับบริการขององค์กรสมมติ

#### Steps

1. เลือก **New agent** แล้วเปิด **Describe**
2. วางข้อความต่อไปนี้

   ```text
   สร้าง Agent ชื่อ "Service Information Agent"

   หน้าที่:
   - ช่วยพนักงานค้นและอธิบายข้อมูลบริการจาก Knowledge ที่กำหนด
   - ตอบสั้น ชัด และระบุ source ที่ใช้
   - แยกข้อมูลที่พบจริงออกจากคำอธิบายทั่วไป
   - ถ้า source ไม่มีข้อมูล ให้บอกว่าไม่พบและแนะนำให้ตรวจเอกสารบริการฉบับล่าสุด

   ข้อจำกัด:
   - ห้ามรับรองผลการอนุมัติคำขอ
   - ห้ามสร้างราคา ระยะเวลาตอบกลับ เงื่อนไข หรือระดับบริการที่ source ไม่ได้ระบุ
   - ห้ามสร้างสิทธิ์การใช้บริการเฉพาะบุคคลที่ source ไม่ได้ระบุ
   ```

3. เปิด **Configure** แล้วเลื่อนไปที่ **Knowledge**
4. กด **Upload** หรือ **Browse** แล้วเพิ่ม `Organization_Service_Catalog_Quick_Guide.pdf`
5. เปิด **Only use specified sources** เพื่อให้ Agent ให้ความสำคัญกับ source ที่เราเพิ่ม

   > **⚠️ Note:** ตัวเลือกนี้ช่วยจัดลำดับความสำคัญของ Knowledge แต่ไม่ได้ปิด general AI knowledge ได้ทั้งหมด ดังนั้นเรายังต้องตรวจคำตอบและ source ทุกครั้ง

6. เพิ่ม starter prompt

   ```text
   แนะนำบริการ 5 รายการแบบสั้น ๆ
   ```

#### Checkpoint

- Agent มี PDF อยู่ใน Knowledge
- Instructions ระบุว่าไม่ให้เดาราคา ระยะเวลาตอบกลับ เงื่อนไข หรือผลการอนุมัติ

### Practice 2: ทดสอบคำตอบที่มีและไม่มีข้อมูลรองรับ

**Primary target:** ทดสอบว่า Agent ใช้ source ถูกต้องและไม่แต่งคำตอบเมื่อ Knowledge ไม่มีข้อมูล

#### Steps

1. เปิด **Try it** แล้วถามคำถามต่อไปนี้ทีละข้อ

   ```text
   บริการ 5 รายการมีอะไรบ้าง และแต่ละรายการเหมาะกับคำขอประเภทใด
   ```

   ```text
   อธิบายความต่างระหว่าง Customer Support Request และ Equipment Request
   ```

   ```text
   ราคาล่าสุดและเวลารับประกันการแก้ไขของทุกบริการเท่าไหร่
   ```

2. ตรวจว่า Agent ระบุ source อ้างอิงสำหรับคำตอบข้อแรกและข้อสอง และบอกว่าไม่พบข้อมูลราคาและเวลารับประกันสำหรับคำถามข้อสาม
3. ถ้าคำตอบกว้างเกินไป ให้ปรับ Instructions ให้ตอบจาก PDF ก่อน
4. เมื่อทดสอบจนพอใจแล้ว กด **Create**
5. เก็บการ Share เป็น **Only you** ก่อน หาก Admin อนุญาตให้แชร์ ให้ตรวจ source และสิทธิ์ของผู้รับก่อนเลือก **Specific users in your organization**

#### Checkpoint

- คำตอบข้อแรกและข้อสองสอดคล้องกับ PDF
- คำถามที่ source ไม่พอได้รับคำตอบว่าไม่พบหรือให้ตรวจเอกสารฉบับล่าสุด
- Agent ไม่รับรองผลอนุมัติหรือสร้างราคาและระดับบริการที่ไม่มีใน source

## Expected Output

- `Service Information Agent` หนึ่ง Agent
- ผลทดสอบอย่างน้อยหนึ่งคำถามที่ตอบได้จาก Knowledge และหนึ่งคำถามที่ Agent ต้องยอมรับว่าข้อมูลไม่พอ

[← กลับหน้าหลัก Agent Builder](README.md) | [จบชุด Agent Builder และกลับไป Day 2](../../README.md)
