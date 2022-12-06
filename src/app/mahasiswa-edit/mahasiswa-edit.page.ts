import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
 selector: 'app-mahasiswa_edit',
 templateUrl: './mahasiswa-edit.page.html',
 styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class MahasiswaEditPage implements OnInit {
 id: any;
 nama: any;
 nim: any;
 jurusan: any;
 constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,
 ) {
 this.route.params.subscribe((param: any) => {
 this.id = param.id;
 console.log(this.id);
 this.ambilMahasiswa(this.id);
 })
 }
 ngOnInit() {
 }
 ambilMahasiswa(id: any) {
 this._apiService.lihat(id, '/lihatMahasiswa.php?id=').subscribe({
 next: (hasil: any) => {
 console.log('sukses', hasil);
 let mahasiswa = hasil;
 this.nama = mahasiswa.nama;
 this.nim = mahasiswa.nim;
 this.jurusan = mahasiswa.jurusan;
 },
 error: (error: any) => {
 this._apiService.notif('gagal ambil data');
 }
 })
 }
 editMatakuliah() {
 let data = {
 id: this.id,
 nama: this.nama,
 nim: this.nim,
 jurusan: this.jurusan,
 }
 this._apiService.edit(data, '/editMahasiswa.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.id = '';
 this.nama = '';
 this.nim = '';
 this.jurusan= '';
 this._apiService.notif('berhasil edit Mahasiswa');
 this.router.navigateByUrl('/mahasiswa');
},
error: (err: any) => {
this._apiService.notif('gagal edit mahasiswa');
}
})
}
}