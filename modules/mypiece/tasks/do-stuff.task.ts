export async function doStuffTask(self, argv) {
  const req = self.apos.task.getReq();
  const ps = await self.apos.mypiece.find(req).toArray();

  for (let p of ps) {  
	p = {
		...p,
		country: p.country + '.'
	}
        p = await self.apos.mypiece.update(req, p);
        await self.apos.mypiece.publish(req, p);
  }
	
  console.log('done');
}
