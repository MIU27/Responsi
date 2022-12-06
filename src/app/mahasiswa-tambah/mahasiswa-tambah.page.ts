import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
 selector: 'app-mahasiswa-tambah',
 templateUrl: './mahasiswa-tambah.page.html',
 styleUrls: ['./mahasiswa-tambah.page.scss'],
})
export class MahasiswaTambahPage implements OnInit {
 id_mhs: any;
 nama: any;
 nim: any;
 jurusan: any;
 constructor(private router: Router, public _apiService: ApiService,) { }
 ngOnInit() {
 }
 addMahasiswa() {
 let data = {
  id_mhs: this.id_mhs,
 nama: this.nama,
 nim: this.nim,
 jurusan: this.jurusan,
 }
 this._apiService.tambah(data, '/tambahMahasiswa.php')
 .subscribe({
 next: (hasil: any) => {
 console.log(hasil);
 this.id_mhs = '';
 this.nama = '';
 this.nim = '';
 this.jurusan= '';
 this._apiService.notif('berhasil input Mahasiswa');
 this.router.navigateByUrl('/mahasiswa');
 },
 error: (err: any) => {
 this._apiService.notif('gagal input Mahasiswa');
 }
 })
 }
}