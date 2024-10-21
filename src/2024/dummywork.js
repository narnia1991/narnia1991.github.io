const dummyWork = [{
  "id": 1,
  "jobTitle": "Chemical Engineer",
  "company": "Edgepulse",
  "workFrom": "11/19/2022",
  "workTo": "12/17/2023",
  "workType": 2,
  "skills": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
  "jobResponsibilities": "Cras non velit nec nisi vulputate nonummy."
}, {
  "id": 2,
  "jobTitle": "Senior Cost Accountant",
  "company": "Photobug",
  "workFrom": "7/14/2021",
  "workTo": "12/27/2023",
  "workType": 2,
  "skills": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
  "jobResponsibilities": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "id": 3,
  "jobTitle": "Desktop Support Technician",
  "company": "Topicware",
  "workFrom": "12/12/2021",
  "workTo": "12/19/2023",
  "workType": 2,
  "skills": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  "jobResponsibilities": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."
}, {
  "id": 4,
  "jobTitle": "VP Accounting",
  "company": "Jabbercube",
  "workFrom": "6/7/2021",
  "workTo": "8/11/2024",
  "workType": 1,
  "skills": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  "jobResponsibilities": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
}, {
  "id": 5,
  "jobTitle": "Account Representative I",
  "company": "Jetpulse",
  "workFrom": "6/30/2022",
  "workTo": "3/4/2024",
  "workType": 1,
  "skills": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "jobResponsibilities": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
}, {
  "id": 6,
  "jobTitle": "Community Outreach Specialist",
  "company": "Izio",
  "workFrom": "6/17/2022",
  "workTo": "8/29/2024",
  "workType": 1,
  "skills": "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
  "jobResponsibilities": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo."
}, {
  "id": 7,
  "jobTitle": "Community Outreach Specialist",
  "company": "Rhynyx",
  "workFrom": "7/30/2021",
  "workTo": "11/11/2023",
  "workType": 1,
  "skills": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
  "jobResponsibilities": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
  "id": 8,
  "jobTitle": "Food Chemist",
  "company": "Eire",
  "workFrom": "4/24/2021",
  "workTo": "3/8/2024",
  "workType": 3,
  "skills": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
  "jobResponsibilities": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 9,
  "jobTitle": "Administrative Assistant IV",
  "company": "Meembee",
  "workFrom": "11/7/2021",
  "workTo": "5/13/2024",
  "workType": 1,
  "skills": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  "jobResponsibilities": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
}, {
  "id": 10,
  "jobTitle": "Chief Design Engineer",
  "company": "Dynazzy",
  "workFrom": "8/11/2021",
  "workTo": "11/10/2023",
  "workType": 3,
  "skills": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
  "jobResponsibilities": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia."
}, {
  "id": 11,
  "jobTitle": "Business Systems Development Analyst",
  "company": "Vimbo",
  "workFrom": "10/21/2022",
  "workTo": "8/14/2024",
  "workType": 2,
  "skills": "Integer ac leo. Pellentesque ultrices mattis odio.",
  "jobResponsibilities": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla."
}, {
  "id": 12,
  "jobTitle": "Assistant Manager",
  "company": "Voonder",
  "workFrom": "1/15/2023",
  "workTo": "2/23/2024",
  "workType": 3,
  "skills": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "jobResponsibilities": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
  "id": 13,
  "jobTitle": "Business Systems Development Analyst",
  "company": "Kanoodle",
  "workFrom": "1/21/2023",
  "workTo": "4/26/2024",
  "workType": 2,
  "skills": "Proin risus.",
  "jobResponsibilities": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus."
}, {
  "id": 14,
  "jobTitle": "Marketing Assistant",
  "company": "Katz",
  "workFrom": "12/25/2021",
  "workTo": "7/1/2024",
  "workType": 3,
  "skills": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  "jobResponsibilities": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
}, {
  "id": 15,
  "jobTitle": "Administrative Officer",
  "company": "Photobug",
  "workFrom": "1/23/2023",
  "workTo": "2/27/2024",
  "workType": 3,
  "skills": "Sed sagittis.",
  "jobResponsibilities": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."
}, {
  "id": 16,
  "jobTitle": "Chief Design Engineer",
  "company": "Realpoint",
  "workFrom": "2/1/2022",
  "workTo": "5/15/2024",
  "workType": 3,
  "skills": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
  "jobResponsibilities": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}, {
  "id": 17,
  "jobTitle": "Associate Professor",
  "company": "Youbridge",
  "workFrom": "7/30/2021",
  "workTo": "7/21/2024",
  "workType": 3,
  "skills": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
  "jobResponsibilities": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
}, {
  "id": 18,
  "jobTitle": "Systems Administrator IV",
  "company": "Tagfeed",
  "workFrom": "8/28/2022",
  "workTo": "10/26/2023",
  "workType": 2,
  "skills": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
  "jobResponsibilities": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl."
}, {
  "id": 19,
  "jobTitle": "Database Administrator II",
  "company": "Meevee",
  "workFrom": "3/17/2022",
  "workTo": "9/5/2024",
  "workType": 1,
  "skills": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
  "jobResponsibilities": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "id": 20,
  "jobTitle": "Internal Auditor",
  "company": "Photospace",
  "workFrom": "11/8/2021",
  "workTo": "8/3/2024",
  "workType": 2,
  "skills": "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
  "jobResponsibilities": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis."
}]
​
