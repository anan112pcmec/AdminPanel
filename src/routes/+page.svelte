<script lang="ts">
    import type { Box } from './+page.js';

    export let data;

    // Ambil dari data load()
    const userBox: Box = data.User;
    const barangBox: Box = data.Barang;
    const transaksiBox: Box = data.Transaksi;
    const complainBox: Box = data.ComplainPelanggan;
</script>

<div class="h-full w-full pb-6 pl-6 pr-6">
  <div class="border border-slate-300 rounded-xl h-full">
    <div class="grid grid-cols-4 p-4 space-x-4">
      <!-- Box 1: User -->
      <div id="box_data_1" class="p-4 border rounded-xl">
        <h3 class="font-bold text-lg">{userBox.Nama}</h3>
        <p class="text-sm">{userBox.Deksripsi}</p>
        <p class="text-2xl font-bold">{userBox.Angka}</p>
      </div>

      <!-- Box 2: Barang -->
      <div id="box_data_2" class="p-4 border rounded-xl">
        <h3 class="font-bold text-lg">{barangBox.Nama}</h3>
        <p class="text-sm">{barangBox.Deksripsi}</p>
        <p class="text-2xl font-bold">{barangBox.Angka}</p>
      </div>

      <!-- Box 3: Transaksi -->
      <div id="box_data_3" class="p-4 border rounded-xl">
        <h3 class="font-bold text-lg">{transaksiBox.Nama}</h3>
        <p class="text-sm">{transaksiBox.Deksripsi}</p>
        <p class="text-2xl font-bold">{transaksiBox.Angka}</p>
      </div>

      <!-- Box 4: Complain -->
      <div id="box_data_4" class="p-4 border rounded-xl">
        <h3 class="font-bold text-lg">{complainBox.Nama}</h3>
        <p class="text-sm">{complainBox.Deksripsi}</p>
        <p class="text-2xl font-bold">{complainBox.Angka}</p>
        
        {#if complainBox.Complain?.Belum_ditinjau === 0 && complainBox.Complain.Sudah_Ditinjau === 0
        && complainBox.Complain.Tak_Dapat_Ditangani === 0}
          <div class="mt-2 text-xs">
            Belum Ada Datanya
          </div>
        {:else if complainBox.Complain}
          <div class="mt-2 text-xs">
            <p>Belum Ditinjau: {complainBox.Complain.Belum_ditinjau}</p>
            <p>Sudah Ditinjau: {complainBox.Complain.Sudah_Ditinjau}</p>
            <p>Tidak Dapat Ditangani: {complainBox.Complain.Tak_Dapat_Ditangani}</p>
          
          </div>
        {/if}
      </div>
    </div>

    <div class="grid grid-cols-3">
      <div id="visualisasi_data_1"></div>
      <div id="visualisasi_data_2"></div>
      <div id="visualisasi_data_3"></div>
    </div>
    <div class="grid grid-cols-2">
      <div id="visualisasi_bawah_1"></div>
      <div id="visualisasi_bawah_2"></div>
    </div>
  </div>
</div>
