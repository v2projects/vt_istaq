<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Ubah Data Virtual Tour</h1>
    <!-- <p class="mb-4">Tambah data hasil project virtual tour berupa file .zip</p> -->


    <div class="my-4"></div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-body">
            <form action="<?= base_url('Admin/AksiEdit'); ?>" method="post">
                <div class="row">
                    <!-- <label class="form-label">ID Virtual Tour</label> -->
                    <!-- <input type="text" id="id_virtualtour" name="id_virtualtour" value="<?= $data_vt->id_virtualtour ?>" class="form-control" disabled> -->
                    <input type="text" id="id_virtualtour" name="id_virtualtour" value="<?= $data_vt->id_virtualtour ?>" hidden>
                    <div class="col-lg-6">
                        <label class="form-label">Nama</label>
                        <input type="text" id="nama" name="nama" value="<?= $data_vt->nama ?>" class="form-control" placeholder="Masukkan nama Virtual Tour . . . " required>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Deskripsi</label>
                        <input type="text" id="deskripsi" name="deskripsi" value="<?= $data_vt->deskripsi ?>" class="form-control" placeholder="Masukkan Deskripsi . . . " required>
                    </div>
                </div>
                <div class="my-2"></div>
                <div class="row">
                    <div class="col-lg-6">
                        <label class="form-label">URL</label>
                        <input type="text" id="url" name="url" value="<?= $data_vt->url ?>" class="form-control" placeholder="Masukkan URL . . ." required>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Date Created</label>
                        <input type="text" id="created" name="created" value="<?= $data_vt->created ?>" class="form-control" required>
                    </div>
                    <label class="form-label" for="formFile">Upload File</label>
                    <input type="text" id="file" name="file" value="<?= $data_vt->file ?>" class="form-control" required>
                </div>
                <div class="my-4"></div>
                <button class="btn btn-success btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-edit"></i>
                        <!-- <i class="fa-solid fa-arrow-right-to-bracket" style="color: #74da92;"></i> -->
                    </span>
                    <span class="text">Ubah</span>
                </button>
            </form>
        </div>
    </div>



</div>
<!-- /.container-fluid -->

</div>
<!-- End of Main Content -->