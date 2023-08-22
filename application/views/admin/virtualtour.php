<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Kelola Virtual Tour</h1>
    <p class="mb-4">Kelola Data Virtual Tour</p>

    <a href="<?= base_url('admin/forminput'); ?>" class="btn btn-success btn-icon-split">
        <span class="icon text-white-50">
            <i class="fas fa-check"></i>
            <!-- <i class="fa-solid fa-arrow-right-to-bracket" style="color: #74da92;"></i> -->
        </span>
        <span class="text">Input Virtual Tour</span>
    </a>
    <div class="my-4"></div>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <!-- <th>ID VIRTUAL TOUR</th> -->
                            <th>NAMA</th>
                            <th>URL</th>
                            <th>FILE</th>
                            <th>DESKRIPSI</th>
                            <th>THUMBNAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $count = 0;
                        foreach ($data_vt as $row) {
                            $count = $count + 1;
                            ?>
                            <tr>
                                <td><?= $count; ?></td>
                                <!-- <td><?= $row->id_virtualtour; ?></td> -->
                                <td><?= $row->nama; ?></td>
                                <td><?= $row->url; ?></td>
                                <td><?= $row->file; ?></td>
                                <td><?= $row->deskripsi; ?></td>
                                <td>
                                    <?php if ($row->thumnail == "") : ?>
                                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modaldi<?= $row->id_virtualtour ?>">Upload Thubmnail</button>
                                    <?php else : ?>
                                        <a target="blank" href="<?= base_url('assets/img/') . $row->thumnail ?>" style="font-size: 12px;">Lihat Thumbnail</a>
                                    <?php endif; ?>
                                </td>
                                <td>

                                    <?php if ($row->ext == 0) : ?>
                                        <p>
                                            <a href="<?= base_url('admin/ekstrak_zip/') . $row->id_virtualtour ?>" class="btn btn-sm btn-success">
                                                Ekstrak
                                            </a>
                                        </p>

                                    <?php else : ?>
                                    <?php endif; ?>

                                    <a href="<?= base_url('admin/formedit/') . $row->id_virtualtour; ?>" class="btn btn-sm btn-success btn-circle">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <button type="button" data-toggle="modal" data-target="#modalHapus<?= $row->id_virtualtour ?>" class="btn btn-sm btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>

                            <div class="modal fade" id="modalHapus<?= $row->id_virtualtour ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Peringatan Penghapusan VT</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Yakin ingin menghapus data virtual tour <?= $row->nama ?> ?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <a href="<?= base_url('admin/hapus_vt/') . $row->id_virtualtour ?>" class="btn btn-danger">Ya! Hapus</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="modaldi<?= $row->id_virtualtour ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <form action="<?= base_url('admin/upload_thumb') ?>" method="POST" enctype="multipart/form-data">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Upload Thumbnail <?= $row->nama ?></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="file" name="thumbnail" id="thumbnail" class="form-control">
                                                <input type="hidden" value="<?= $row->id_virtualtour ?>" name="id_virtualtour" id="id_virtualtour" class="form-control">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Simpan</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>



</div>
<!-- /.container-fluid -->

</div>
<!-- End of Main Content -->